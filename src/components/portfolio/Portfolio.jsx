import "./portfolio.scss";
import { useEffect, useState } from "react";
import PortfolioList from "../porfoliolist/PortfolioList";

import {
  frontendPortfolio,
  backendPortfolio,
  otherPortfolio,
  designPortfolio

} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("frontend");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "frontend",
      title: "Front End Skills",
    },
    {
      id: "backend",
      title: "Back End Skills",
    },
    {
      id: "ohter",
      title: "Other Skills",
    },
    {
      id: "web",
      title: "Web App",
    },
   
  ];

  useEffect(()=>{

    switch(selected){
      case "frontend":
        setData(frontendPortfolio);
        break;
        case "backend":
        setData(backendPortfolio);
        break;
        case "ohter":
        setData(otherPortfolio);
        break;
        case "web":
        setData(designPortfolio);
        break;
        default:
          setData(frontendPortfolio);
    }

  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>
      <div className="container">
        {data.map((d)=> 
        <div className="item">
          <img src={d.img} />

          <h3>{d.title}</h3>
        </div>
        )}
        
        
      </div>
    </div>
  );
}
