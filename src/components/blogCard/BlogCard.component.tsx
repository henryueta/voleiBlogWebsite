import { Link } from "react-router-dom"
import "./BlogCard.component.css"
import { AuthorProps } from "../blog/Blog.component"
import { useEffect, useState } from "react"
import { BlogDateProps } from "../blog/Blog.component"

export interface AuthorCardProps{
  author:AuthorProps
}

export type BlogCardProps = Record<"cape"|"title"|"redirectTo"|"date",string> & AuthorCardProps


const BlogCard = ({
    cape="",
    title="",
    author={
      id:"",
      image:"",
      name:""
    },
    date="",
    redirectTo=""
}:BlogCardProps) => {

  const [blogCardDate,setBlogCardDate] = useState<BlogDateProps>({
    day:new Date("").getDate(),
    month:new Date("").getMonth(),
    year:new Date("").getFullYear() 
  });

  useEffect(()=>{

    setBlogCardDate({
      day:new Date(date).getDate(),
      month:new Date(date).getMonth(),
      year:new Date(date).getFullYear()
    })
    
  },[date])

  return (
    <Link to={redirectTo}>
    <div className="blogCardContainer">
      <div className="capeBlogCardContainer">
        <img src={cape} alt={"blog"+title+"cape"} />
      </div>
      <div className="titleBlogCardContainer">
        <h1>{title.length > 50 ? title.slice(0,50).concat("...") : title}</h1>
      </div>
      <div className="blogCardDateContainer">
        <p>{blogCardDate.day+"/"+ (blogCardDate.month.toString().length == 1 ? "0".concat(blogCardDate.month.toString()) : blogCardDate.month) +"/"+blogCardDate.year}</p>
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
