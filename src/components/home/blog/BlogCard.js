import React from "react";

// title : 'Check at least a doctor in a year for your teeth',
// description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
// author:'Dr. Cudi',
// authorImg : wilson,
// date : '23 April 2019'
const BlogCard = ({ blogItem }) => {
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow">
        <div className="card-body">
          <div className="d-flex py-4 ps-2">
            <img
              src={blogItem.authorImg}
              alt=""
              className="customer-img me-3"
            />
            <div>
              <h6 className="text-brand">{blogItem.author}</h6>
              <p className="text-muted">{blogItem.date}</p>
            </div>
          </div>
          <h6>{blogItem.title}</h6>
          <p>{blogItem.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
