import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SkiDayList from './SkiDayList';
import SkiDayCount from './SkiDayCount';
import AddDayForm from './AddDayForm';
import Menu from './Menu';

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
      <div className='app'>
        <Menu />
        {
          (this.props.location.pathname === '/') ?
            <SkiDayCount
              total={ this.countDays() }
              powder={ this.countDays('powder') }
              backcountry={ this.countDays('backcountry') } /> :
            (this.props.location.pathname === '/add-day') ?
              <AddDayForm /> :
              <SkiDayList days={ this.state.allSkiDays } filter={ this.props.params.filter } />
        }
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object,
  params: PropTypes.object
};

export default App;
