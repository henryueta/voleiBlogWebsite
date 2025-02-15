import React, { useEffect, useState } from 'react'
import useQuery from '../../hooks/useQuery';
import blog from "../../data/blog.data.json"
import author from "../../data/author.data.json"
import { useParams } from 'react-router-dom';
import "./Blog.component.css"
import { marked } from 'marked'
import { DOMPurify } from 'dompurify';


type BlogProps = Record<"id"|"title"|"content"|"authorId",string>

type AuthorProps = Record<"id"|"name"|"image", string>;

const Blog = () => {
  const {id} = useParams();
    const {onSearchById} = useQuery();
    const [blogData,setBlogData] = useState<BlogProps>();
    const [authorData,setAuthorData] = useState<AuthorProps>();
    const [blogContent,setBlogContent] = useState<string>("# ttitulo");

    useEffect(()=>{
      setBlogData(onSearchById<BlogProps>(id!,blog))
    },[])

    useEffect(()=>{
      setAuthorData(onSearchById<AuthorProps>(blogData?.authorId || "",author))
      const regex = /https?:\/\/[^\s]+/g;
      //g = capturar todas as igualdades
      const match = blogData?.content.match(regex)
      if (match) {
        const url = match[0];
        if (url) {
          fetch(url)
            .then(response => response.text())
            .then(data => {
               console.log(data)
              setBlogContent(data.toString())
            })
            .catch(error => {
              console.error('Erro ao carregar conteúdo externo:', error);
            });
        }
      }
      
    },[blogData])
    console.log(blogContent)

  return (
       <article className="blogArticle">
          <div className='titleBlogContainer'>
            <h1>{blogData?.title}</h1>
          </div>
          <div className='authorBlogContainer'>
          <img src={authorData?.image} alt="authorImage" />
          <b>{authorData?.name}</b>
          </div>
          <div className='contentBlogContainer' dangerouslySetInnerHTML={
            {
              __html:blogContent
            }
          }>

          </div>
       </article>
  )
}
export default Blog
