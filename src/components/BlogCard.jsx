import Link from "next/link";
import appwriteServices from "@/appwrite/services";
import Image from "next/image";

export default function BlogCard({ $id, title, featuredImage }) {
  return (
    <Link href={`/blog-post/${$id}`}>
      <div class="w-full overflow-hidden rounded-2xl shadow-black/30 shadow-xl">
        <div class="relative h-full">
        <Image
            class="w-full h-full object-cover "
            src={appwriteServices.getFilePreview(featuredImage)}
            alt={title}
          />
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-lime-800/30 to-lime-700/90 flex items-center justify-center">
            <h2 class="text-white text-2xl font-bold text-center">
              Card Title yaha rhega aur bhi bada title yaha rh skta h
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
