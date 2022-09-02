import React from 'react';

export default function Portfolio() {
  return (
    <div id="portfolio">
      <div className="row">
        <section id="projects" className="sectionCard">

          <div className="col-3 col-med-12 sectionCard">
            <h2>Projects</h2>



            <div className="card col-3 col-md-12">
              <img src="./assets/images/Screen Shot 2022-05-31 at 3.07.34 PM.png"
                className="card-img-top proj-img" alt="Image of Coffee Shop App"/>
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

            <div className="card col-3 col-md-12">
              <img src="./assets/images/SightCityImage.png" className="card-img-top proj-img"
                alt="image of SightCity App"/>
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

            <div className="card col-3 col-md-12">
              <img src="./assets/images/Screen Shot 2022-05-08 at 10.26.30 AM.png"
                className="card-img-top proj-img" alt="image of WorkDay Scheduler"/>
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
        </section>
      </div>

    </div>
  );
}
