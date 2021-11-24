import React from 'react';
import Cinder from '/Users/juvoros/Code/Bootcamp/homework/react-portfolio/src/images/Cinder.png';
import Fitness from '/Users/juvoros/Code/Bootcamp/homework/react-portfolio/src/images/fitnessTracker.png';
import Budget from '//Users/juvoros/Code/Bootcamp/homework/react-portfolio/src/images/jv-budget-tracker.herokuapp.com_.png';
import scheduler from '/Users/juvoros/Code/Bootcamp/homework/react-portfolio/src/images/scheduler.png';

import './style.css';

const Portfolio = () => {
    return (
<main className="Projects">
    <div className="PTitleContainer">
        <header className="PTitle">
            <h2>My Projects</h2>
        </header>
        </div>
    <div className="PortContainer">

        <div className="PContainer">
            <section className="PCard">
                <h3 className="PCardTitle">Coder Mingle</h3>
                <img src={Cinder} className="PImage" />
                <a href="https://github.com/Project2-Team-5/Coder-Mingle" className="DeployBtn">GitHub Repo</a>
                <a href="https://coder-mingle.herokuapp.com/" className="DeployBtn">Deployed Link</a>
            </section>

            </div>
        <div className="PContainer">
            <section className="PCard">
                <h3 className="PCardTitle">Fitness Tracker</h3>
                <img src={Fitness} className=" PImage" />
                <a href="https://github.com/JuVoros/fitness-tracker" className="DeployBtn">GitHub Repo</a>
                <a href="https://jv-fitness-tracker.herokuapp.com/" className="DeployBtn">Deployed Link</a>
            </section>

            </div>
        <div className="PContainer">
            <section className="PCard">
                <h3 className="PCardTitle">Budget Tracker</h3>
                <img src={Budget} className="PImage" />
                <a href="https://github.com/JuVoros/budget-tracker" className="DeployBtn">GitHub Repo</a>
                <a href="https://jv-budget-tracker.herokuapp.com/" className="DeployBtn">Deployed Link</a>
            </section>

            </div>
        <div className="PContainer">
            <section className="PCard">
                <h3 className="PCardTitle">Day Planner</h3>
                <img src={scheduler} className="PImage" />
                <a href="https://github.com/JuVoros/day-planner" className="DeployBtn">GitHub Repo</a>
                <a href="https://github.com/JuVoros/day-planner" className="DeployBtn">Deployed Link</a>
            </section>

            </div>
        <div className="PContainer">
            <section className="PCard">
                <h3 className="PCardTitle">Day Planner</h3>
                <img src={scheduler} className="PImage" />
                <a href="https://github.com/JuVoros/day-planner" className="DeployBtn">GitHub Repo</a>
                <a href="https://github.com/JuVoros/day-planner" className="DeployBtn">Deployed Link</a>
            </section>

            </div>
        <div className="PContainer">
            <section className="PCard">
                <h3 className="PCardTitle">Day Planner</h3>
                <img src={scheduler} className="PImage" />
                <a href="https://github.com/JuVoros/day-planner" className="DeployBtn">GitHub Repo</a>
                <a href="https://github.com/JuVoros/day-planner" className="DeployBtn">Deployed Link</a>
            </section>

            </div>
        <div className="PContainer">
            <section className="PCard">
                <h3 className="PCardTitle">Day Planner</h3>
                <img src={scheduler} className="PImage" />
                <a href="https://github.com/JuVoros/day-planner" className="DeployBtn">GitHub Repo</a>
                <a href="https://github.com/JuVoros/day-planner" className="DeployBtn">Deployed Link</a>
            </section>

            </div>
        <div className="PContainer">
            <section className="PCard">
                <h3 className="PCardTitle">Day Planner</h3>
                <img src={scheduler} className="PImage" />
                <a href="https://github.com/JuVoros/day-planner" className="DeployBtn">GitHub Repo</a>
                <a href="https://github.com/JuVoros/day-planner" className="DeployBtn">Deployed Link</a>
            </section>

            </div>
    </div>
</main>
    );
}


export default Portfolio;