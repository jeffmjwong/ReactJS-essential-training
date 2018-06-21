import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SkiDayList from './SkiDayList';
import SkiDayCount from './SkiDayCount';
import AddDayForm from './AddDayForm';
import Menu from './Menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.addDay = this.addDay.bind(this);
    this.state = {
      allSkiDays: [
        { resort: 'Squaw Valley', date: '2016-01-02', powder: true, backcountry: false }
      ]
    };
  }

  countDays(filter) {
    const { allSkiDays } = this.state;
    return allSkiDays.filter(day => (
      filter ? day[filter] : day
    )).length;
  }

  addDay(newDay) {
    this.setState({
      allSkiDays: [...this.state.allSkiDays, newDay]
    });
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
              <AddDayForm onNewDay={ this.addDay } /> :
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
