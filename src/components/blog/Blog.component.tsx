import React, { useEffect, useState } from 'react'
import useQuery from '../../hooks/useQuery';
import blog from "../../data/blog.data.json"
import author from "../../data/author.data.json"
import { useParams } from 'react-router-dom';
import "./Blog.component.css"


export type BlogProps = Record<"id"|"title"|"content"|"authorId"|"cape",string>

export type AuthorProps = Record<"id"|"name"|"image", string>;

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
              setBlogContent(data.toString())
            })
            .catch(error => {
              console.error('Erro ao carregar conteúdo externo:', error);
            });
        }
      }
      
    },[blogData])

  return (
       <article className="blogArticle">
          <div className='titleBlogContainer'>
            <header>
                <h1>{blogData?.title}</h1>
            </header>
          </div>
          <div className='authorBlogContainer'>
          <img src={authorData?.image} alt={authorData?.name + "´s image"} />
          <b>{authorData?.name}</b>
          </div>
          <div className='capeBlogContainer'>
          <img src={blogData?.cape}  alt={"blog "+blogData?.title + " cape"} />
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
