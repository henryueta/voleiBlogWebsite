import { Link } from "react-router-dom"
import "./SuggestionList.component.css"

export type SuggestionProps = Record<'title' | 'redirectTo'| 'id' ,string>

interface SuggestionListProps{

    suggestionList:SuggestionProps[]

}

const SuggestionList = ({
    suggestionList = []
}:SuggestionListProps) => {
  return (
    <section className="suggestionListSection">
        <h1>Veja também</h1>
        {
            suggestionList.map((item)=>
                <div className="suggestionContainer" key={item.id}> 
                    <Link  to={item.redirectTo}>
                        {item.title}             
                    </Link>
                </div>
            )
        }
    </section>
  )
}

export default SuggestionList
