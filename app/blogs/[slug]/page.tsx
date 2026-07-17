import { client } from "@/sanity/lib/client";
import Footer from "@/app/components/Footer";
import BlogHero from "@/app/components/BlogHero";
import BlogContent from "@/app/components/BlogContent";
import BlogSidebar from "@/app/components/BlogSidebar";
import AffiliateBox from "@/app/components/AffiliateBox";
import RelatedBlogs from "@/app/components/RelatedBlogs";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  // Current Blog
  const article = await client.fetch(
    `*[_type=="blog" && slug.current==$slug][0]{
      _id,
      title,
      category,
      mainImage,
      rating,
      content,
      affiliateUrl,
      buttonText,
      _createdAt
    }`,
    { slug }
  );

  // Blog not found
  if (!article) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Blog Not Found
        </h1>
      </main>
    );
  }

  // Latest Blogs (Sidebar)
  const latestBlogs = await client.fetch(`
    *[_type=="blog"] | order(_createdAt desc)[0...6]{
      _id,
      title,
      category,
      mainImage,
      slug
    }
  `);

  // Related Blogs
  const relatedBlogs = await client.fetch(
    `*[_type=="blog" && category==$category && slug.current!=$slug][0...3]{
      _id,
      title,
      category,
      mainImage,
      slug,
      rating,
      price
    }`,
    {
      category: article.category,
      slug,
    }
  );

  return (
    <main className="bg-gray-50 min-h-screen">

      <BlogHero article={article} />

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">

        <div className="lg:col-span-2 space-y-12">

          <BlogContent article={article} />

          <AffiliateBox article={article} />

        </div>

        <BlogSidebar latestBlogs={latestBlogs} />

      </div>

      <RelatedBlogs blogs={relatedBlogs} />

      <Footer />

    </main>
  );
}