import "./skills.scss";
import { useEffect, useState } from "react";
import SkillsList from "../skillslist/SkillsList";

import {
  frontendSkills,
  backendSkills,
  otherSkills,
} from "../../data";

export default function Skills() {
  const [selected, setSelected] = useState("frontend");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "frontend",
      title: "Front End",
    },
    {
      id: "backend",
      title: "Back End",
    },
    {
      id: "ohter",
      title: "Others",
    },
   
   
  ];

  useEffect(()=>{

    switch(selected){
      case "frontend":
        setData(frontendSkills);
        break;
        case "backend":
        setData(backendSkills);
        break;
        case "ohter":
        setData(otherSkills);
        break;
        default:
          setData(frontendSkills);
    }

  },[selected])

  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <ul>
        {list.map((item) => (
          <SkillsList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>
      <div className="container">
        {data.map((d)=> 
        <div className="item">
          <a href={d.url} target="_blank" without rel="noreferrer">
          <img src={d.img} />
          </a>
          <h3>{d.title}</h3>
        </div>
        )}
        
        
      </div>
    </div>
  );
}
