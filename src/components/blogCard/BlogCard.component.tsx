import { Link } from "react-router-dom"
import "./BlogCard.component.css"

type BlogCardProps = Record<"cape"|"title"|"authorName"|"redirectTo",string>

const BlogCard = ({
    cape="",
    title="",
    authorName="",
    redirectTo=""
}:BlogCardProps) => {
  return (
    <Link to={redirectTo}>
    <div className="blogCardContainer">
      <div className="capeBlogCardContainer">
        <img src={cape} alt="" />
      </div>
      <div className="titleBlogCardContainer">
        <h1>{title}</h1>
      </div>
      <div className="authorBlogCardContainer">
        <p>{authorName}</p>
      </div>
    </div>
    </Link>
  )
}

export default BlogCard
