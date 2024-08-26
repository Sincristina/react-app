
export default function BlogComponent(props) {
    const { blog } = props;
    const { title, image, TimpDeCitire, hrefTo } = blog;
  
    return (
      <div className="flex">
          <span className="image">
            {image}
          </span>
          <div>
          <h2 className="blog-title">{title}</h2>
          <span className="readingTime">{TimpDeCitire}</span>
          <span className="vezi-mai-mult">{hrefTo}</span>
          </div>
  
      </div>
    );
  }
  