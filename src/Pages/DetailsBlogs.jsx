import { useParams, Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import DataBlogs from "../data/json";

function Details() {
  const { id } = useParams();
  const blog = DataBlogs.find((item) => item.id === Number(id));

  if (!blog) {
    return <div className="text-center py-20 text-xl">Blog not found</div>;
  }

  return (
    <div>
      <NavBar />

      <div className="container mx-auto px-4 py-12">

        
        <div className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="hover:text-black">News</Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">{blog.title}</span>
        </div>

        
        <div className="mb-10">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        
        <div className="text-gray-500 text-sm mb-8">
          {blog.p1}
        </div>

        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>{blog.p2}</p>
          <p>{blog.p3}</p>
        </div>

        
        <div className="mt-10">
          <h3 className="font-semibold mb-3">Tags:</h3>
          <div className="flex gap-3">
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-black hover:text-white transition">
              {blog.b1}
            </span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-black hover:text-white transition">
              {blog.b2}
            </span>
          </div>
        </div>

        
        <div className="mt-16 border-t pt-10">
          <h2 className="text-2xl font-bold mb-6">Leave a Comment</h2>

          <form className="space-y-4 max-w-xl">
            <textarea
              placeholder="Write your comment..."
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
            ></textarea>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
            />

            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Post Comment
            </button>
          </form>
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Details;
