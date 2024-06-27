import ListItem from "./ListItem/ListItem";

function List({ title, list = [] }) {
  return (
    <div className="panel__container">
      <p className="panel__title"> {title}</p>
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default List;
