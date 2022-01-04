import classes from "./About.module.css";
import Header from "./../Header/Header";
import me from "./../../img/IMG_20201016_121242_101.jpg";

const About = () => {
  return (
    <div className={classes.AboutMe} id="about">
      <Header title={"About Me"} />
      <div className={classes.Container}>
        <div className={classes.Text}>
          <h2>Hi! I'm Brandon</h2>
          <p>
            A Software Developer with experience coordinating groups of people
            to meet certain goals, working in a team, managing time, and
            completing tasks by deadlines. Experienced in creating and
            deploying a variety of websites and applications using JavaScript, HTML, CSS, and
            React. Made with code that was written through Test-Driven
            Development to ensure functionality.
          </p>
        </div>
        <div className={classes.Photo}>
          <img className={classes.Me} src={me} alt="me"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
