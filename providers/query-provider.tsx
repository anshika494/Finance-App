'use client'

import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React from 'react'

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 60 * 1000,
            },
        },
    })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
    if (typeof window === 'undefined') {
        return makeQueryClient()
    } else {
        if (!browserQueryClient) browserQueryClient = makeQueryClient()
        return browserQueryClient
    }
}

type Props = {
    children: React.ReactNode;
};

export function QueryProvider({ children }: Props){
    const QueryClient = getQueryClient()

    return (
        <QueryClientProvider client={QueryClient}>{children}
        </QueryClientProvider>
    )
}