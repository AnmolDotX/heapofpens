import Link from "next/link";
import appwriteServices from "@/appwrite/services";
import Image from "next/image";

export default function BlogCard({ $id, title, featuredImage }) {
  return (
    <Link href={`/blog-post/${$id}`}>
      <div className="w-full min-h-[250px] bg-lime-300/70 overflow-hidden rounded-2xl hover:scale-105 transition-all duration-200 hover:shadow-lime-400/50 hover:shadow-2xl active:shadow-lg active:shadow-lime-500/50 active:scale-95 active:bg-lime-500 shadow-black/30 shadow-xl flex flex-col items-center">
        <div className="min-w-[50%] min-h-[150px] w-full">
          <Image
            className="w-full min-h-[150px] border-4 border-b-0 rounded-t-2xl border-lime-500 object-cover bg-green-950"
            src={appwriteServices.getFilePreview(featuredImage)}
            alt={title + " alt text"}
          />
        </div>
          <div className="w-full min-h-[100px] flex items-center justify-start px-5">
            <h2 className="text-lime-950 text-2xl text-left font-bold">
              {title}
            </h2>
          </div>
      </div>
    </Link>
  );
}
