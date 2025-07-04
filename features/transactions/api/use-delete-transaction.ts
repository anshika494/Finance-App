import { toast } from "sonner";
import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";

type ResponseType = InferResponseType<typeof client.api.transactions[":id"]["$delete"]>;

export const useDeleteTransaction = (id?: string) => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, Error>({
    mutationFn: async () => {
      if (!id) throw new Error("Transaction ID is required for deletion");

      const response = await client.api.transactions[":id"]["$delete"]({
        param: { id },
      });

      if (!response.ok) {
        throw new Error("Failed to delete transaction");
      }

      return await response.json();
    },
    onSuccess: (_data) => {
      toast.success("Transaction deleted");

      queryClient.invalidateQueries({ queryKey: ["transaction", id] });
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
    onError: () => {
      toast.error("Failed to delete transaction");
    },
  });
};