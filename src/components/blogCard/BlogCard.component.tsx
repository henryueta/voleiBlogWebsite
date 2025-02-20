import { Link } from "react-router-dom"
import "./BlogCard.component.css"
import { AuthorProps } from "../blog/Blog.component"
import { useEffect, useState } from "react"
import { FormatedDateProps } from "../../hooks/useDate"
import useDate from "../../hooks/useDate"

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

  const {onFormatDate} = useDate()
  const [blogCardDate,setBlogCardDate] = useState<FormatedDateProps>(onFormatDate(""));

  useEffect(()=>{

    setBlogCardDate(onFormatDate(date))
    // Criando duas datas
// const data1 = new Date('2025-02-19');
// const data2 = new Date(date);
// // Calculando a diferença em milissegundos
// const diferencaEmMs = data2 - data1;

// // Convertendo a diferença para dias
// const diferencaEmDias = diferencaEmMs / (1000 * 60 * 60 * 24);

// console.log(`A diferença entre é de ${diferencaEmDias} dias.`);

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
