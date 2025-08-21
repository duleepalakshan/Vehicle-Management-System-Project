'use client';

import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient"; // We will create this file next

export function ApolloProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
