import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Footer from "@/app/components/Footer";
import BlogCard from "@/app/components/BlogCard";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  // 1. Slug ko clean Title me convert karne ke liye (e.g., "tech-gadgets" -> "Tech & Gadgets")
  const categoryTitle = slug
    ? slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "CATEGORY";

  const query = `*[_type == "blog" && category match $categorySearch] {
    _id,
    title,
    description,
    category,
    mainImage,
    slug,
    rating,
    price
  }`;

  // Run query with parameter
  const rawArticles = await client.fetch(query, { categorySearch: categoryTitle });

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between pt-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-12 grow">
        {/* Category Header */}
        <div className="border-b border-gray-200 pb-6 mb-10">
          <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">
            Category Archive
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2 tracking-tight">
            {categoryTitle}
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Showing {rawArticles.length} live database reviews.
          </p>
        </div>

        {/* Grid Layout */}
        {rawArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rawArticles.map((article: any) => {
              // Sanity ke response ko BlogCard ke expected format me map kar rahe hain
              const mappedArticle = {
                id: article._id,
                title: article.title,
                description: article.description || "No description provided.",
                category: article.category,
                image: article.mainImage ? urlFor(article.mainImage).url() : "https://placeholder.com",
                href: `/blogs/${article.slug.current}`,
                rating: article.rating || 5,
                price: article.price || "Free",
              };

              return <BlogCard key={article._id} article={mappedArticle} />;
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800">No articles found</h3>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}