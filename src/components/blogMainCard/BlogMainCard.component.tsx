import { useEffect, useState } from "react";
import { BlogCardProps } from "../blogCard/BlogCard.component"
import "./BlogMainCard.component.css"
import useDate, { FormatedDateProps } from "../../hooks/useDate";
import { Link } from "react-router-dom";


const BlogMainCard = ({
    title="",
    cape='',
    date = "",
    redirectTo="",
    author
}:BlogCardProps) => {
  const {onFormatDate} = useDate(); 
  const [blogMainCardDate,setBlogMainCardDate] = useState<FormatedDateProps>(onFormatDate(""));

  useEffect(()=>{

    setBlogMainCardDate(onFormatDate(date))

  },[date])

  return (
    <Link to={redirectTo}>
    <section className="blogMainCardSection">
        <section className="blogMainInfoSection">
          <div className="blogMainTitleContainer">
              <h1>{title.length > 50 ? title.slice(0,50).concat("...") : title}</h1>
          </div>
          <div className="blogMainDateContainer">
              <p>{blogMainCardDate.day+"/"+ (blogMainCardDate.month.toString().length == 1 ? "0".concat(blogMainCardDate.month.toString()) : blogMainCardDate.month) +"/"+blogMainCardDate.year}</p>
          </div>
          <div className="blogMainAuthorContainer">
            <img src={author.image} alt={"author "+author.name+" image"} />
            <p>{author.name}</p>
          </div>
        </section>
        <img src={cape} alt={"blog "+title+" cape"} />    
    </section>
    </Link>
  )
}

export default BlogMainCard
