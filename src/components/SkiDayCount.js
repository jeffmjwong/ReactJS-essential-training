import React from 'react';
import '../stylesheets/ui.scss';
import Terrain from 'react-icons/lib/md/terrain';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Calendar from 'react-icons/lib/fa/calendar';
import PropTypes from 'prop-types';

const percentToDecimal = decimal => `${decimal * 100}%`;

const calcGoalProgress = (total, goal) => percentToDecimal(total / goal);

const SkiDayCount = ({ total=70, powder=60, backcountry=50, goal=100 }) => (
  <div className='ski-day-count'>

    <div className='total-days'>
      <span>{ total }</span>
      <Calendar />
      <span>days</span>
    </div>

    <div className='powder-days'>
      <span>{ powder }</span>
      <SnowFlake />
      <span>days</span>
    </div>

    <div className='backcountry-days'>
      <span>{ backcountry }</span>
      <Terrain />
      <span>days</span>
    </div>

    <div>
      <span>{ calcGoalProgress(total, goal) }</span>
    </div>

  </div>
);

SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number,
  goal: PropTypes.number
};

// SkiDayCount.defaultProps = {
//   total: 50,
//   powder: 20,
//   backcountry: 30,
//   goal: 100
// };

export default SkiDayCount;
