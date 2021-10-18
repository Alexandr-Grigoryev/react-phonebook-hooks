export default function ContactListItem({ item, onDelete, id }) {
  return (
    <li>
      {item.name}:{item.number}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}
