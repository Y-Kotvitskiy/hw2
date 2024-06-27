import ListItem from "./ListItem/ListItem";

function List({ title, list = [], buttons = [], countItems }) {
  return (
    <div className="panel__container">
      <p className="panel__title">
        {title}: {countItems(list)}
      </p>
      <ul className="panel__list">
        {list.map((item) => (
          <ListItem key={item.id} item={item} buttons={buttons} />
        ))}
      </ul>
    </div>
  );
}

export default List;
