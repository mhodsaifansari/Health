import React, { Fragment } from "react";
import Button from "../UI/Buttons/Button";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import pmPic from "../../images/pmPic.png";
import Colors from "../Colors";
import map from "../../images/map.png";
import Heading from "./../UI/Heading/Heading";

const servicesCardData = [
  {
    id: "c1",

    text: "Get your online Health ID",

    imgURL: "",
  },
  {
    id: "c2",
    text: "Watch live local or global health status",
    imgURL: "",
  },
  {
    id: "c3",
    text: "Get 25% discount on all health procedures with Health ID",
    imgURL: "",
  },
];

const Home = () => {
  return (
    <div className={classes["home-container"]}>
      <div className={classes.sidebar}>
        <div className={classes.mission}>
          <img src={pmPic} alt="PM of India, Mr.Modi" />
          <div>
            <p>PM DIGITAL HEALTH MISSION....</p>
          </div>
        </div>
      </div>
      <main className={classes.content}>
        <Card>
          <section className={classes.intro}>
            <Heading text="NAME OF OUR WEBSITE" />
            <p>
              In order to achieve the mission
            </p>

            <Button>Download Your Health ID</Button>
          </section>
        </Card>

        {/* SERVICES SECTION */}
        <Card>
          <section className={classes.services}>
            <Heading text="Our Services" />
           <div className={classes["service-container"]}>
              {/* SERVICES */}
              {servicesCardData.map((data) => (
                <div className={classes["service-card"]}>
                  <div className={classes["service-card--text"]}>
                    {data.text}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Card>
      </main>
    </div>
  );
};

export default Home;
