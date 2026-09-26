import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source, mode } = props;
  return (
    <div>
      <div
        className="card my-3 position-relative"
        style={{
          width: "18rem",
          backgroundColor: mode.background,
          color: mode.color,
          border: `1px solid ${mode.color === "white" ? "#444" : "#ddd"}`,
        }}
      >
        <span
          className="position-absolute badge rounded-pill bg-danger"
          style={{ left: "50%", zIndex: 1 }}
        >
          {source}
        </span>
        <img
          src={
            !imageUrl
              ? "https://cdn.benzinga.com/cdn-cgi/image/width=1200,height=800,fit=crop/files/images/story/2026/06/29/Energy-Shutterstock.png"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body" style={{ backgroundColor: mode.background, color: mode.color }}>
          <h5 className="card-title" style={{ color: mode.color }}>{title}.....</h5>
          <p className="card-text" style={{ color: mode.color }}>{description}.....</p>
          <p className="card-text">
            <small style={{ color: mode.color }}>
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
