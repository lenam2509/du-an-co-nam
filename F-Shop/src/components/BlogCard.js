import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2022</p>
        <h5 className="title">Chúc bạn 1 ngày tối lành</h5>
        <p className="desc">
          Công nghệ hiện đại nhất
        </p>
        <Link to="/blog/:id" className="button">
          Đọc thêm
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
