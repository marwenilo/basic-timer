import React, { Component } from "react";

export default class Timer extends Component {
  render() {
    return (
      <div>
        <div className="timeContainer">
          <div className="time">
               <span>{this.props.hours}00:</span>
             <span>{this.props.minutes}00:</span>
              <span>{this.props.seconds}00:</span>
              <span>{this.props.mseconds}00</span>
          </div>
          {/* <input className="timeInput" /> */}
          <div className="btnContainer">
            <button className="playBtn"> <i class="fas fa-play"></i></button>
            <button className="resetBtn"> <i className="fas fa-sync-alt"></i></button>
          </div>
        </div>
      </div>
    );
  }
}
