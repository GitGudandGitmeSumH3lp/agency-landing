import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { getAllPosts } from "@/lib/data";
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        title="Latest Insights"
        subtitle="Thoughts, strategies, and updates from the Tidal Solutions team."
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col items-start justify-between bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl border border-gray-100 transition-all duration-300"
              >
                <div className="flex items-center gap-x-4 text-xs text-gray-500 mb-4">
                  <time dateTime={post.date} className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </time>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">
                    Article
                  </span>
                </div>
                
                <h3 className="mt-3 text-2xl font-bold leading-6 text-gray-900 group-hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                
                <p className="mt-5 text-base leading-7 text-gray-600">
                  {post.excerpt}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}