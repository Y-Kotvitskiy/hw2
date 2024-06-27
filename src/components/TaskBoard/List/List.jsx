
import ListItem from "./ListItem/ListItem";

function List({title, list = []}) {


    return  <section>
        <div>
            <p>{title}</p>
            <ul> { list.map(item => <ListItem key={item.id} item={item}/> )} </ul>
        </div>
    </section>
    
}    

export default List;