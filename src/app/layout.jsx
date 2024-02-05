import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/lib/StoreProvider";
import { ExternalLinks, Footer, HTMLWrapper, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heap Of Pens",
  description: "A full stack blog app",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <HTMLWrapper>
        <body
          className={`${inter.className} flex flex-col items-center dark:bg-black bg-lime-500 transition-all duration-200`}
        >
          <Header />
          <main className='flex items-start justify-between text-white pt-24 pb-10 px-[100px] w-full min-h-screen'>
            <div className="w-[80%] h-screen">
              {children}
            </div>
            <div className="flex flex-col items-center h-screen px-5 py-5">
              <ExternalLinks />
            </div>
          </main>
          <Footer />
        </body>
      </HTMLWrapper>
    </StoreProvider>
  );
}
