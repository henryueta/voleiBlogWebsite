import useQuery from "../../hooks/useQuery"
import "./BlogCardList.component.css"
import blog from "../../data/blog.data.json"
import author from "../../data/author.data.json"
import BlogCard from "../blogCard/BlogCard.component";

const BlogCardList = () => {
    const {onSearchById} = useQuery();

  return (
    <section className='blogCardListSection'>

    {
        blog.map((item)=>{
            return <BlogCard key={item.id} redirectTo={"/blog/"+item.id} author={onSearchById(item.authorId,author) || {
              id:"",
              image:"",
              name:""
            }} 
            cape={item.cape}
             title={item.title}
              date={item.date}/>
        }
        )
    }
    

    </section>
  )
}

export default BlogCardList
