import { client } from "@/sanity/lib/client";
import Hero from "@/app/components/Hero";
import BlogGrid from "@/app/components/BlogGrid";
import CategorySection from "./components/CateorySection";
import AdSlider from "./components/Adds";
import Footer from "@/app/components/Footer";

// Sanity se real-time saare blogs fetch karne ka function
async function getAllBlogs() {
  const query = `*[_type == "blog"] | order(_createdAt desc) {
    _id,
    title,
    category,
    mainImage,
    slug,
    rating,
    affiliateUrl,
    buttonText,
    _createdAt
  }`;
  
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return []; 
  }
}

// Sanity se Hero Banners fetch karne ka function
async function getHeroBanners() {
  const query = `*[_type == "banner"] | order(order asc) {
    _id,
    title,
    image,
    affiliateUrl,
    buttonText
  }`;

  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Banner fetch error:", error);
    return [];
  }
}
export default async function Home() {
  const [allBlogs, banners] = await Promise.all([
  getAllBlogs(),
  getHeroBanners(),
]);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-between">
      <Hero banners={banners} />
      {/* Main Blog Grid Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-12">
        <h2 className="text-4xl font-extrabold text-gray-900 font-sans mb-8 text-center">
          Our Latest Product Reviews
        </h2>

        {allBlogs.length > 0 ? (
          <BlogGrid blogs={allBlogs} />
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800">No reviews published yet</h3>
            <p className="text-sm text-gray-400 mt-1">
              Sanity Studio (`localhost:3000/studio`) me jaakar posts publish karein!
            </p>
          </div>
        )}
      </div>
      <AdSlider/>
      <CategorySection blogs={allBlogs}/>
      
      <Footer />
    </main>
  );
}