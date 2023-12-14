import { Inter } from "next/font/google";
import './globals.css'
import StoreProvider from "@/lib/StoreProvider";
import { ExternalLinks, Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heap Of Pens",
  description: "A full stack blog app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className="">
      <body className={`${inter.className} flex flex-col items-center dark:bg-black bg-lime-500`}>
        <Header />
        <main className="flex items-start justify-between text-white px-40 mt-32 w-full">
          <StoreProvider>{children}</StoreProvider>
          <ExternalLinks />
        </main>
        <Footer/>
      </body>
    </html>
  );
}
