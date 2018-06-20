import React, { Component } from 'react';
import SkiDayList from './SkiDayList';
import SkiDayCount from './SkiDayCount';

const days = [
  { resort: 'Squaw Valley', date: new Date('1/2/2016'), powder: true, backcountry: false },
  { resort: 'Kirkwood', date: new Date('3/28/2016'), powder: false, backcountry: false },
  { resort: 'Mt. Tallac', date: new Date('4/2/2016'), powder: false, backcountry: true }
];

class App extends Component {
  state = {
    allSkiDays: days
  }

  countDays(filter) {
    const { allSkiDays } = this.state;
    return allSkiDays.filter(day => (
      filter ? day[filter] : day
    )).length;
  }

  render() {
    return (
      <div className='App'>
        <SkiDayList days={ this.state.allSkiDays } />
        <SkiDayCount
          total={ this.countDays() }
          powder={ this.countDays('powder') }
          backcountry={ this.countDays('backcountry') } />
      </div>
    );
  }
}

export default App;
