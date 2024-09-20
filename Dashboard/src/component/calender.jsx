import React, { useState,useEffect } from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
const localizer = momentLocalizer(moment);
const Setcalender = () => {
    const [events, setEvents] = useState([]);
    const handleSelectSlot = ({ start, end }) => {
        const title = window.prompt('New Event Name')
        if (title) {
            setEvents([...events, { start, end, title }]);
        }
    }
    const handleSelectEvent = (event) => {
        const confirmDelete = window.confirm(`Delete event "${event.title}"?`);
        if (confirmDelete) {
            setEvents(event.filter((e) => e !== event));
        }
    }
  return (
    <div className='calendar'>
          <Calendar
              localizer={localizer}
              events={events}
              selectable
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              onSelectSlot={handleSelectSlot}
              onSelectEvent={handleSelectEvent}
              defaultView='month'
              popup={true}
          />
          
    </div>
  )
}

export default Setcalender;
