import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 24,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    if (this.state.hours === 0 && this.state.minutes === 0 && this.state.seconds === 0) {
      clearInterval(this.timerID);
      // Trigger your action when the timer reaches zero
      // For example: this.props.onTimerEnd()
    } else {
      if (this.state.minutes === 0 && this.state.seconds === 0) {
        this.setState((prevState) => ({
          hours: prevState.hours - 1,
          minutes: 59,
          seconds: 59,
        }));
      } else if (this.state.seconds === 0) {
        this.setState((prevState) => ({
          minutes: prevState.minutes - 1,
          seconds: 59,
        }));
      } else {
        this.setState((prevState) => ({
          seconds: prevState.seconds - 1,
        }));
      }
    }
  };

  render() {
    const { hours} = this.state;
    return (
        <div>
          {String(hours).padStart(2, '0')} hours left
        </div>
    );
  }
}

export default Timer;
