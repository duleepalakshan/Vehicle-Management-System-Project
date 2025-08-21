import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ApolloProviderWrapper } from "@/lib/apolloProvider";

export const metadata: Metadata = {
  title: "Vehicle Data Management",
  description: "Hcode Intern Task - Vehicle Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <ApolloProviderWrapper>{children}</ApolloProviderWrapper>
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
