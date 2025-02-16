import { useEffect, useState } from "react";
import useQuery from "../../hooks/useQuery"
import "./BlogCardList.component.css"
import { BlogProps,AuthorProps } from "../blog/Blog.component";
import blog from "../../data/blog.data.json"
import author from "../../data/author.data.json"
import BlogCard from "../blogCard/BlogCard.component";

const BlogCardList = () => {
    const {onSearchById} = useQuery();
    const [blogList,setBlogList] = useState<BlogProps[]>();

    useEffect(()=>{
        setBlogList(blog)
    },[])

  return (
    <section className='blogCardListSection'>

    {
        blog.map((item)=>{
            return <BlogCard key={item.id} redirectTo={"/blog/"+item.id} authorName={onSearchById(item.authorId,author)?.name || ""} cape={item.cape} title={item.title}/>
        }
        )
    }

    </section>
  )
}

export default BlogCardList
