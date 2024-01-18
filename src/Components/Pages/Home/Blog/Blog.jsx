import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch("https://quieasycarts.onrender.com/allBlogs")
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []);



  return (
    <>
      <div className="container mx-auto mt-20 ">
        <h2 className=" text-center	text-4xl">Latest Blogs</h2>
        <p className="text-center	pb-6">Check our latest blog here.....</p>
        <div className="flex  ">
          {
            blogs.map(blog => 
              < div key={blog._id} className="card w-100 bg-base-100 shadow-xl mr-8 flex ">
          <figure><img className="w-full max-h-80 shadow-lg bg-blue-600" src={blog.image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
             {blog.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{blog.content}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
            <Link to={`/blogdetails/${blog._id}`} className="btn btn-accent  p-2 m-2" >View Blog</Link>
          </div>
        </div>

            )
            
          }


      </div>
    </div >
    </>
  );
};

export default Blog;
