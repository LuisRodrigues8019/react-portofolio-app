import "./works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "assets/biotiful.jpg",
      title: "Biotiful",
      desc: "Creation of the future e commerce website Biotiful.bio during my internship at the Mission Locale pour l'Emploi in Saint-Gilles.",

      img: "assets/biotiful.jpg",

      url: "https://luisrodrigues8019.github.io/Bouman-Johnson-housing-project/",
    },
    {
      id: "2",
      icon: "assets/freshop.jpg",
      title: "Freshop",
      desc: "Implementation of the back end with nodeJs and mongoDb.",
      img: "assets/freshop.jpg",
      url: "https://freshluis.herokuapp.com/",
    },
    {
      id: "3",
      icon: "assets/boumanjohnsonproject.jpg",
      title: "Bouman Johnson project",
      desc: "Backend: connecting to a homemade api using javascript and fetch. Frontend: building a user friendly form and a clear result page.",
      img: "assets/boumanjohnsonproject.jpg",
      url: "https://luisrodrigues8019.github.io/Bouman-Johnson-housing-project/",
    },
    {
      id: "4",
      icon: "assets/todoapp.jpg",
      title: "TodoApp",
      desc: "Creating a to-do list application using node.js and mongoDb.",
      img: "assets/todoapp.jpg",
      url: "https://todoappluis.herokuapp.com/",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div className="title">
        <h1>Works</h1>
      </div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>

                  <span>
                    <a href={d.url} target="_blank" without rel="noreferrer">
                      Demo
                    </a>
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
