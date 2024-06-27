export default function Button({ id, title, status, clickHandle }) {
  return <button onClick={ () => clickHandle(id, status) }>{title} </button>;
}
