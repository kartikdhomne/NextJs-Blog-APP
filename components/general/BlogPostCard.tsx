import Image from "next/image";
import Link from "next/link";

interface IappProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage?: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
}

export function BlogPostCard({ data }: IappProps) {
  const nullImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ799fyQRixe5xOmxYZc3kAy6wgXGO-GHpHSA&s";

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg flex flex-col">
      <Link
        href={`/post/${data.id}`}
        className="w-full h-full flex flex-col"
      >
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src={data?.imageUrl}
            alt="Image for blog"
            fill
            className="object-top object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            {data.title}
          </h3>

          <div className="mb-4 text-sm text-gray-600 line-clamp-2 flex-grow">
            {data.content}
          </div>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image
                  src={data?.authorImage || nullImage}
                  alt={data?.authorName}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-medium text-gray-700">
                {data.authorName}
              </p>
            </div>

            <time className="text-xs text-gray-500">
              {new Intl.DateTimeFormat("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                timeZone: "Asia/Kolkata",
              }).format(data.createdAt)}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
}
