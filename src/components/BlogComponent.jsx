
export default function BlogComponent(props) {
    const { blog } = props;
    const { title, image, TimpDeCitire, hrefTo } = blog;
  
    return (
      <div className="flex">
          <a href="" className="image">
            {image}
          </a>
          <div>
          <h2 className="blog-title">{title}</h2>
          <span className="readingTime">{TimpDeCitire}</span>
          <span className="vezi-mai-mult">{hrefTo}</span>
          </div>
  
      </div>
    );
  }
  