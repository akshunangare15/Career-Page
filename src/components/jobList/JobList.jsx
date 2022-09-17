import "./jobList.scss";

export default function jobList({ id, title, name,  active, setSelected }) {
  return (
    <li
      className={active ? "jobList active" : "jobList"}
      onClick={() => setSelected(id, title, name)}
    >
      {title}
      {name}
    </li>
  );
}
