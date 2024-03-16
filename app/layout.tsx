import StoreProvider from "@/redux/StoreProvider";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASC Property",
  description:
    "Discover ASC Property, a distinguished real estate enterprise deliver your unique needs, have been serving the vibrant community of Jember since Year 2011",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
