import { BlogCardProps,AuthorCardProps } from "../blogCard/BlogCard.component"
import "./BlogMainCard.component.css"


const BlogMainCard = ({
    title="",
    cape='',
    date = "",
    redirectTo="",
    author
}:BlogCardProps) => {
  return (
    <section className="blogMainCardSection">
        <section className="blogMainInfoSection">
          <div className="blogMainTitleContainer">
              <h1>{title.length > 50 ? title.slice(0,50).concat("...") : title}</h1>
          </div>
          <div className="blogMainDateContainer">
              <p></p>
          </div>
          <div className="blogMainAuthorContainer">
            <img src={author.image} alt={"author "+author.name+" image"} />
            <h2>{author.name}</h2>
          </div>
        </section>
        <img src={cape} alt={"blog "+title+" cape"} />    

    </section>
  )
}

export default BlogMainCard
