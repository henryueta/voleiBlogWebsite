import BlogCardList from "../blogCardList/BlogCardList.component"
import BlogMainCard from "../blogMainCard/BlogMainCard.component"
import blog from "../../data/blog.data.json"
import author from "../../data/author.data.json"
import "./Main.component.css"



const Main = () => {
  return (
    <main className="mainContent">
        <BlogMainCard 
        cape='https://res.cloudinary.com/ditnypr5s/image/upload/v1739823204/torneio_tvnplv.avif' 
        title={blog[0].title} 
        author={author[0]} 
        date={blog[0].date} 
        redirectTo={"/blog/"+blog[0].id}
        />

        <BlogCardList/>
    </main>
  )
}

export default Main
