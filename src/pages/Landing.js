import React from 'react'
import MainBanner from '../components/MainBanner'
import SmallScreenBanner from '../components/SmallScreenBanner'
import EventCard from '../components/EventCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {Data} from '../components/data.js'

const Landing = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <SmallScreenBanner />
      <h1 id="upcomingEvents">Upcoming events</h1>
      <section className="eventCardDiv">
      {Data.map((event) => {
        return (
          <EventCard
            key={event.id}
            id = {event.id}
            img={event.img}
            eventName={event.eventName}
            venue={event.venue}
            date={event.date}
            month={event.month}
          />
        );
      })}
      </section>
      <h1 id="upcomingEvents">Past events</h1>

      <Footer />
    </>
  );
}

export default Landing