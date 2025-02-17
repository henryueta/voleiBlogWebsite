import { Link } from "react-router-dom"
import "./BlogCard.component.css"
import { AuthorProps } from "../blog/Blog.component"

interface AuthorCardProps{
  author:AuthorProps
}

type BlogCardProps = Record<"cape"|"title"|"redirectTo",string> & AuthorCardProps




const BlogCard = ({
    cape="",
    title="",
    author={
      id:"",
      image:"",
      name:""
    },
    redirectTo=""
}:BlogCardProps) => {
  return (
    <Link to={redirectTo}>
    <div className="blogCardContainer">
      <div className="capeBlogCardContainer">
        <img src={cape} alt="" />
      </div>
      <div className="titleBlogCardContainer">
        <h1>{title.length > 50 ? title.slice(0,50).concat("...") : title}</h1>
      </div>
      <div className="authorBlogCardContainer">
        <img src={author.image} alt={author.name+" image"} />
        <p>{author.name}</p>
      </div>
    </div>
    </Link>
  )
}

export default BlogCard
