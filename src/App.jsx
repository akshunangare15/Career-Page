import Header from "./components/header/Header";
import Intro from "./components/intro/Intro"
import Values from "./components/values/Values"
import TeamMembers from "./components/team members/TeamMembers"
import Jobs from "./components/jobs/Jobs"
import Mission from "./components/mission/Mission"

import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Values/> 
       <TeamMembers/>
       <Jobs/>
       <Mission/> 
     </div>
    </div>
  );
}

export default App;
