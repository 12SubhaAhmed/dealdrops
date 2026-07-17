import { client } from "@/sanity/lib/client";
import BlogGrid from "@/app/components/BlogGrid";
import Footer from "../components/Footer";

async function getAllBlogs() {
  const query = `*[_type == "blog"] | order(_createdAt desc) {
    _id,
    title,
    category,
    mainImage,
    slug,
    rating,
    price,
    _createdAt
  }`;
  try {
    const data = await client.fetch(query);
    return data;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return [];
  }
}

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <div>
    <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-28 min-h-screen">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center tracking-tight mb-8">
        Our Latest blogs
      </h1>
      {blogs.length > 0 ? (
        <BlogGrid blogs={blogs} />
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800">No reviews found in this category</h3>
        </div>
      )}
      
    </div>
    <Footer/>
    </div>
  );
}
