import classes from "./NavBar.module.css";
import bit from "./../../img/Adobe_20210825_003941.png";
const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <nav>
        <ul>
          <li>
            <img className={classes.Pic} src={bit} alt="bitmoji"></img>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/#about">About Me</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#experience">Experience</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contactme">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
