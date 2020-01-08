import React, { Component } from "react";

export default class Timer extends Component {
state = {
    seconds: 0,
    time: 0,
    status: null
};




getTime=(timeInMilliseconds) =>{

  let time = timeInMilliseconds;
  
  const hours = this.formatUnitOfTime(Math.floor( time / (60 * 60 * 1000)));
  
  time = time % (60 * 60 * 1000);
  const minutes = this.formatUnitOfTime(Math.floor( time / (60 * 1000)));
  
  time = time % (60 * 1000);
  const seconds = this.formatUnitOfTime(Math.floor( time / 1000 ));
  
  const milliseconds = this.formatUnitOfTime(time % 1000);
  
  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

formatUnitOfTime(unitOfTime) {
  return unitOfTime < 10 ? `0${unitOfTime}`.substring(0,2) : unitOfTime.toString().substring(0,2);
}
onSecondsChanged=(seconds) =>{
seconds = parseInt(seconds);

if (seconds) {
    if (seconds <= 359999) {
        this.setState(() => ({ seconds: seconds, time: seconds * 1000 }));
    }
} else {
    this.setState(() => ({ seconds: 0, time: 0 }));
}
}

startTimer=()=> {
if (this.state.status !== 'started') {
    this.interval = setInterval(() => {
        if (this.state.time !== 0) {
            this.setState(prevState => ({ time: prevState.time - 10 }));
        } else {
            this.setState(() => ({ seconds: 0, status: null, time: 0 }));

            clearInterval(this.interval);
        }
    }, 10);

    this.setState(() => ({ status: 'started' }));
}
}

stopTimer=()=> {
if (this.state.status) {

    clearInterval(this.interval);

    this.setState((prevState) => {
        return ({
            status: 'stopped',
            seconds: Math.floor(prevState.time / 1000)
        });
    });
}
}

resetTimer=() =>{
clearInterval(this.interval);

this.setState(() => ({ seconds: 0, status: null, time: 0 }));
}




   handelChange=(e)=>{
    //  if(this.state.run) {
      this.setState({
        input:e.target.value

     })
    //  }
    
   }
  render() {
    return (
      <div>
        <div className="timeContainer">
          <div className="time">
               <span>{this.state.hour}:</span>
             <span>{this.state.min}:</span>
              <span>{this.state.seconds}</span>
              {/* <span>{this.state.test}ee</span> */}
          </div>
          {this.getTime}
          <input className="timeInput" onChange={this.onSecondsChanged}  />
          <div className="btnContainer">
            <button className="playBtn"onClick={this.startTimer}> <i class="fas fa-play"></i></button>
            <button className="resetBtn" onClick={this.resetTimer}> <i className="fas fa-sync-alt"></i></button>
          </div>
        </div>
      </div>
    );
  }
}
