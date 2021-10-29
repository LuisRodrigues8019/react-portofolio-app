import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <h1>About me</h1>
      <div className="slider">
        <div className="container">
          <div className="lr">
            <img src="assets/lr.jpeg" alt="" />
          </div>
          <div className="text">
            <p>
              Passionate about the web domain, I undertook a professional
              retraining by following a junior web developer training at Becode.
              <br />
              Organized and dynamic, I also have the seriousness and rigor that
              have always helped me adapt with a lot of versatility.
              <br /> Currently looking for an opportunity to showcase my
              technical skills and values ​​such as teamwork, adaptability,
              perseverance.
            </p>
            <br />
            <a
              href="https://www.linkedin.com/in/luis-rodrigues-da-silva/"
              target="_blank"
              without
              rel="noreferrer"
            >
              More about me ...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
