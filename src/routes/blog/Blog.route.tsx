import Blog from "../../components/blog/Blog.component"
import Footer from "../../components/footer/Footer.component"
import Nav from "../../components/nav/Nav.component"
import "./Blog.route.css";

const BlogRoute = () => {

  return (
    <>
    <Nav/>
      <section className="blogSection">
        <Blog/>
      </section>
    <Footer/>
    </>
  )
}

export default BlogRoute
