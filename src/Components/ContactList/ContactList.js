export default function ContactList({ children }) {
  return <ul>{children}</ul>;
}

// function ContactList({ list }) {
//   return (
//     <ul className="friend-list">
//       {list.map((item) => (
//         <li key={item.id}>{item.name}</li>
//       ))}
//     </ul>
//   );
// }

// export default ContactList;
