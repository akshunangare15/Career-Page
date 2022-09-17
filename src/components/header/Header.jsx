import "./header.scss";

//Header
export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className={"header " + (menuOpen && "active")}>
      <div className=" logo "> 
        <img src=" https://cutewallpaper.org/24/physics-png/croppedibphysicslogopng-%E2%80%93-ib-physics.png" alt= "   " />
        <h1> Web Core </h1>
      </div>
      <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </header>
  );
}
