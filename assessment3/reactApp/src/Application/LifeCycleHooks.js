import React, { Component } from "react";

export default class LifeCycleHooks extends Component {

  constructor(props){
    super(props); 
    
    this.state = {
      duration: props.duration
    }

    this.session = React.createRef();
  }

  componentDidMount() {
    this.sessionInterval();
  }

  sessionInterval = () => {
    console.log("componentDidMount")
    setTimeout(() => {
      this.session.current.value = "MERN";
      this.session.current.focus();
    }, 2000)
  }

  componentWillUnmount() {
    console.log("componentWillUnmount done");
    clearInterval(this.sessionInterval);
  }

  shouldComponentUpdate(nextProps, nextState) {
    
    if (nextState.duration === this.state.duration) {
      console.log("shouldComponentUpdate", nextProps,nextState)
      return false 
    } else {
      return true
    } 
  }

  getSnapshotBeforeUpdate(prevState, prevProps){
    console.log("getSnapshotBeforeUpdate");
    return { prevState,prevProps}
  }


  componentDidUpdate(prevState, prevProps){
    console.log("componentDidUpdate done");
    console.log("prevState",prevState);
    console.log("prevProps", prevProps);
  }

  changeDuration = (evt) => {
    let duration = evt.target.value;
    this.setState({
      duration
    })
    evt.preventDefault();
  }

  formSubmit = (evt) => {
    let session = this.session.current.value;

    alert(`LifeCycleHooks Component -> Session: ${session} Duration: ${this.state.duration}`);

    evt.preventDefault();
  }

  render(){
    return(
      <>
        <form onSubmit={this.formSubmit}>
        <h3>Session</h3>
        <input type="text" placeholder="Session" ref={this.session}></input>
        <h3>Duration</h3>
        <input type="text" placeholder="Duration" onChange={this.changeDuration} value={this.state.duration} ></input>
        <div>
          <button type="submit">Submit</button>
        </div>
        </form>
      </>
    )
  }
}

