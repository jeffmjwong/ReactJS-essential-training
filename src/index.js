import React from 'react';
import { render } from 'react-dom';
import SkiDayList from './components/SkiDayList';
import SkiDayCount from './components/SkiDayCount';

const days = [
  { resort: 'Squaw Valley', date: new Date('1/2/2016'), powder: true, backcountry: false },
  { resort: 'Kirkwood', date: new Date('3/28/2016'), powder: false, backcountry: false },
  { resort: 'Mt. Tallac', date: new Date('4/2/2016'), powder: false, backcountry: true }
];

// render(
//   <SkiDayList
//     days={ days }/>,
//   document.getElementById('react-container')
// );

render(
  <SkiDayCount />,
  document.getElementById('react-container')
);
