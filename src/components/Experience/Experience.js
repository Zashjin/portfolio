import classes from "./Experience.module.css";
import Header from "./../Header/Header";

const listTitleStyle = {
  fontWeight: 900,
  color: "#85ffbd",
  fontSize: "1.5rem",
};

const Company = {
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

const CompanyHr = {
  color: "#85ffbd",
  paddingLeft: "20%",
  paddingRight: "20%",
  margin: "0px",
  width: "60%",
};

const Devops = (
  <div>
    <div>
      <ul>
        <li style={listTitleStyle}>
          DevOps Staff (Front-End)
          <hr style={LiHrStyle} />
        </li>
        <li style={Company}>
          Damage Inc.
          <hr style={CompanyHr} />
        </li>
      </ul>
      <ul>
        <li>Springville, Utah</li>
        <li>August 2021 - March, 2022</li>
      </ul>
    </div>
    <p>
    Fixed Bugs, worked with a remote team of international developers, and aided in developing features for a site used by more than 20,000 Gamers.
    </p>
    <p>
        Aided in developing an away feature, and a Profile page for users.
    </p>
    <p>
      Added filters for Division Leaders to view the activity of their members.
    </p>
  </div>
);

const Thinkful = (
  <div>
    <ul>
      <li style={listTitleStyle}>
        Software Developer - In-training
        <hr style={LiHrStyle} />
      </li>
      <li style={Company}>
        Thinkful
        <hr style={CompanyHr} />
      </li>
    </ul>
    <ul>
      <li>Orem, Utah</li>
      <li>March, 2021 –  January, 2022</li>
    </ul>
    <p>
      Learned software development standards with an emphasis on HTML5,
      JavaScript, React, CSS3.
    </p>
    <p>
    Full stack bootcamp. Teaches Node.js, Express and Postgresql.
    </p>
    <p>Created and deployed mobile-first applications</p>
    <p>Spent several hours a week with a Senior Web Developer.</p>
  </div>
);

const AllExperience = [Devops, Thinkful];

const Experience = () => {
  return (
    <div className={classes.Experience} id="experience">
      <Header title={"Experience"} />
      <div className={classes.Container}>
        {AllExperience.map((experience) => {
          return <div className={classes.List}>{experience}</div>;
        })}
      </div>
    </div>
  );
};

export default Experience;
