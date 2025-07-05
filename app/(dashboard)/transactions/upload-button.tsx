import { Upload } from "lucide-react";
import { useCSVReader } from "react-papaparse";
import { Button } from "@/components/ui/button";

type CSVUploadResult = {
  data: string[][];
  meta: object;
  errors: object[];
};

type Props = {
  onUpload: (result: CSVUploadResult) => void;
};

export const UploadButton = ({ onUpload }: Props) => {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: { getRootProps: () => React.HTMLAttributes<HTMLDivElement> }) => (
        <div {...getRootProps()}>
          <Button size="sm" className="w-full lg:w-auto" type="button">
            <Upload className="size-4 mr-2" />
            Import
          </Button>
        </div>
      )}
    </CSVReader>
  );
};