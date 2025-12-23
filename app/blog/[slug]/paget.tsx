import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/data";
import { ArrowLeft, Calendar } from "lucide-react";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Next.js 13/14/15 Server Component
export default function BlogPostPage({ params }: BlogPostPageProps) {
  // 1. Get the slug from the URL parameters
  const { slug } = params;

  // 2. Find the post in our "Database"
  const post = getPostBySlug(slug);

  // 3. If no post exists, show the 404 page
  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
            <Calendar size={16} />
            {post.date}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            {post.title}
          </h1>
        </header>

        {/* Content Body */}
        {/* dangerouslySetInnerHTML is used here because our mock content contains HTML tags. 
            In a real app, you might use a Markdown renderer. */}
        <div 
          className="prose prose-lg prose-blue max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content || "" }}
        />

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-gray-600 italic">
            Enjoyed this read? <Link href="/#contact" className="text-blue-600 hover:underline">Contact us</Link> to see how we can apply these strategies to your business.
          </p>
        </div>
      </div>
    </article>
  );
}