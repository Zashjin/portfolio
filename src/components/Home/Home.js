import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.Home} id="home">
      <div className={classes.Container}>
        <h1 className={classes.Hello}>Brandon Gamble-Thompson</h1>
        <h2>-Software Developer-</h2>
      </div>
    </div>
  );
};

export default Home;
