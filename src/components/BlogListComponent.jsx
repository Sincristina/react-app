import BlogComponent from "../components/BlogComponent"


export default function BlogListComponent(props) {
    const { contentBlog } = props;
    return (

      <div>
        {contentBlog.map((blog, index,) => {
          const key = index + "cevs text";
          return ( 
          <BlogComponent key={key} blog={blog}  />
          )
        })}
      </div>
    );
  }
  