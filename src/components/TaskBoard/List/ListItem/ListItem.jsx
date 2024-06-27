import Button from "./Button/Button";

function ListItem({ item, buttons }) {
  return (
    <li>
      {item.title}
      {buttons.map((button, index) => (
        <Button
          key={index}
          id={item.id}
          title={button.title}
          status={button.status}
          clickHandle={button.buttonClickHanlde}
        />
      ))}
    </li>
  );
}

export default ListItem;
