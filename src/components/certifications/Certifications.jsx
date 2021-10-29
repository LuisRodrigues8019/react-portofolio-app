import "./certifications.scss";

export default function Certifications() {
  const data = [
    {
      id: 1,
      title: "Udemy",
      img: "assets/jsudemy.png",
      desc: "Online javascript certification on Udemy.",
    },
    {
      id: 2,
      title: "Becode.org",
      img: "assets/becode.jpeg",
      desc: "Certification for having successfully completed the junior web developer training at Becode.org.",
      featured: true,
    },
    {
      id: 3,
      title: "Linkedin",
      img: "assets/linkedinreact.png",
      desc: "Online ReactJs essentials certificattion on Linkedin.",
    },
  ];

  return (
    <div className="certifications" id="certifications">
      <h1>Certifications</h1>

      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src={d.img} className="user" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
