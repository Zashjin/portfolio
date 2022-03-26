
import classes from "./Projects.module.css";
import Header from "./../Header/Header";

const listTitleStyle = {
  fontWeight: 900,
  color: "#85ffbd",
  fontSize: "1.5rem",
};


const LiHrStyle = {
  color: "#85ffbd",
  alignSelf: "center",
  margin: "1px 0  10px 0",
  height: "2px",
  width: "80%",
  border: "none",
  background:
    "-webkit-gradient(linear, 0 0, 100% 0, from(transparent), to(transparent), color-stop(50%, #85ffbd))",
};

const handleURL = (url) => {
    return (event) => window.open(url, "_blank:");
  };



const Reservation = (
  <div>
    <div>
      <ul>
        <li style={listTitleStyle}>
          Reservation Service
          <hr style={LiHrStyle} />
        </li>
      </ul>
      <ul>
        <li
        style={{ textDecoration: "underline", fontSize:'18px', cursor:"pointer" }}
         onClick={handleURL(
            "https://github.com/Zashjin/Reservation-final"
          )}

        >GitHub link</li>
        <li
        style={{ textDecoration: "underline", fontSize:'18px',  cursor:"pointer" }}
        onClick={handleURL(
           "https://final-cap-client.herokuapp.com/dashboard"
         )}
        >Live Site link</li>
      </ul>
    </div>
    <p>
    Created a Fullstack application to make, view, edit and delete reservations for a restaurant.
    </p>
    <p>
    Built using React, Javascript, HTML, CSS, node.js, Express, and postgresql.
    </p>
  </div>
);

const Pomodoro = (
  <div>
    <ul>
      <li style={listTitleStyle}>
        Pomodoro Timer
        <hr style={LiHrStyle} />
      </li>
    </ul>
    <ul>
        <li
        style={{ textDecoration: "underline", fontSize:'18px',  cursor:"pointer" }}
         onClick={handleURL(
            "https://github.com/Zashjin/Pomodoro-Timer"
          )}

        >GitHub link</li>
        <li
        style={{ textDecoration: "underline", fontSize:'18px',  cursor:"pointer" }}
        onClick={handleURL(
           "https://project-pomodoro-timer-qualified-1-two-phi.vercel.app/"
         )}
        >Live Site link</li>
      </ul>
    <p>
    Developed a timer app that help people optimize productivity by giving frequent timed breaks.
    </p>
    <p>
    Built using JavaScript, React, HTML, and CSS.
    </p>
  </div>
);
const Portfolio = (
  <div>
    <ul>
      <li style={listTitleStyle}>
        My Portfolio
        <hr style={LiHrStyle} />
      </li>
    </ul>
    <ul>
        <li
        style={{ textDecoration: "underline", fontSize:'18px',  cursor:"pointer" }}
         onClick={handleURL(
            "https://github.com/Zashjin/portfolio/"
          )}

        >GitHub link</li>
        <li
        style={{ textDecoration: "underline", fontSize:'18px', cursor:"pointer" }}
        onClick={handleURL(
           "https://brandongamble-thompson.vercel.app/"
         )}
        >Live Site link</li>
      </ul>
    <p>
     My personal website, where you can learn a bit about me as a Developer.
    </p>
    <p>
    Built using JavaScript, React, HTML, and  CSS.
    </p>
  </div>
);

const AllProjects = [Reservation, Pomodoro, Portfolio];

const Projects = () => {
  return (
    <div className={classes.Projects} id="projects">
      <Header title={"My Projects"} />
      <div className={classes.Container}>
        {AllProjects.map((project) => {
          return <div className={classes.List}>{project}</div>;
        })}
      </div>
    </div>
  );
};

export default Projects;
