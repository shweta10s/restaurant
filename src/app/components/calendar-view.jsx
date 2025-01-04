"use client"

import React from 'react'

// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

export default function CalendarView({ onDateChange }) {
  return <div onChange={onDateChange} />;
}
