import "./menu.scss";

//Side bar
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">About Us</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <a href="#values">Values</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <a href="#teamMembers">Team Members</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <a href="#jobs">Job List</a>
        </li>
      
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#mission">Mission</a>
        </li>
      </ul>
    </div>
  );
}
