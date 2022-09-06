import React from 'react';
import coffeeImage from '../../images/CoffeeShopImage.png';
import sightCityImage from '../../images/SightCityImage.png';
import workDayImage from '../../images/WorkDayScheduler.png';

export default function Portfolio() {
  return (
    <div id="portfolio">
     
      <h2>Projects</h2>
      <div className="row">
          
          <div className="col-12 col-md-4">
            <div className="card">
              <img src= { coffeeImage }
                className="card-img-top proj-img" alt="Coffee Shop App"/>
                <div className="card-body">
                  <h5 className="card-title">Coffee Shop!</h5>
                  <p className="card-text">Coffee Shop is an application designed for coffee
                    enthusiasts. It allows users to find new coffee shops near them by
                    allowing them to filter through options such as ratings, reviews, and
                    price. The app also provides descriptions of different coffee types and
                    recipes if the user decides to make coffee at home instead.</p>
                  <a href="https://p1-coffeework.github.io/coffeeLocator/" target="blank"
                    className="btn">Application</a>
                  <a href="https://github.com/p1-coffeeWork/coffeeLocator" target="blank"
                    className="btn">Github Repository</a>
                </div>
            </div>
          </div>
 
          <div className="col-12 col-md-4">
            <div className="card">
              <img src= { sightCityImage } className="card-img-top proj-img"
                alt="SightCity App"/>
                <div className="card-body">
                  <h5 className="card-title">SightCity Travel Planning</h5>
                  <p className="card-text">SightCity Travel Planning is an application designed to
                    help the user plan out hotels and activities for their next trip. The user
                    is directed to make an account where they can view their saved trips or make
                    new trips. The user can create an itinerary that they can have emailed too themselves.</p>
                  <a href="https://sightcity-travel-planning.herokuapp.com/" target="blank"
                    className="btn">Application</a>
                  <a href="https://github.com/edanahy22/sightcity-travel-planning" target="blank"
                    className="btn">Github Repository</a>
                </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card">
              <img src= { workDayImage }
                className="card-img-top proj-img" alt="WorkDay Scheduler"/>
                <div className="card-body">
                  <h5 className="card-title">Work Day Scheduler</h5>
                  <p className="card-text">Work day Scheduler is an application to help users keep
                    track of events for their work day. They can edit and save events for
                    each hour in their work day.</p>
                  <a href="https://edanahy22.github.io/dailyScheduler/" target="blank"
                    className="btn">Application</a>
                  <a href="https://github.com/edanahy22/dailyScheduler" target="blank"
                    className="btn">Github Repository</a>
                </div>
            </div>
          </div>
      

      <div className="col-12 col-md-4">
            <div className="card">
              <img src= { coffeeImage }
                className="card-img-top proj-img" alt="Coffee Shop App"/>
                <div className="card-body">
                  <h5 className="card-title">Coffee Shop!</h5>
                  <p className="card-text">Coffee Shop is an application designed for coffee
                    enthusiasts. It allows users to find new coffee shops near them by
                    allowing them to filter through options such as ratings, reviews, and
                    price. The app also provides descriptions of different coffee types and
                    recipes if the user decides to make coffee at home instead.</p>
                  <a href="https://p1-coffeework.github.io/coffeeLocator/" target="blank"
                    className="btn">Application</a>
                  <a href="https://github.com/p1-coffeeWork/coffeeLocator" target="blank"
                    className="btn">Github Repository</a>
                </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card">
              <img src= { sightCityImage } className="card-img-top proj-img"
                alt="SightCity App"/>
                <div className="card-body">
                  <h5 className="card-title">SightCity Travel Planning</h5>
                  <p className="card-text">SightCity Travel Planning is an application designed to
                    help the user plan out hotels and activities for their next trip. The user
                    is directed to make an account where they can view their saved trips or make
                    new trips. The user can create an itinerary that they can have emailed too themselves.</p>
                  <a href="https://sightcity-travel-planning.herokuapp.com/" target="blank"
                    className="btn">Application</a>
                  <a href="https://github.com/edanahy22/sightcity-travel-planning" target="blank"
                    className="btn">Github Repository</a>
                </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card">
              <img src= { workDayImage }
                className="card-img-top proj-img" alt="WorkDay Scheduler"/>
                <div className="card-body">
                  <h5 className="card-title">Work Day Scheduler</h5>
                  <p className="card-text">Work day Scheduler is an application to help users keep
                    track of events for their work day. They can edit and save events for
                    each hour in their work day.</p>
                  <a href="https://edanahy22.github.io/dailyScheduler/" target="blank"
                    className="btn">Application</a>
                  <a href="https://github.com/edanahy22/dailyScheduler" target="blank"
                    className="btn">Github Repository</a>
                </div>
            </div>
          </div>

      </div>
      
    </div>
  );
}
