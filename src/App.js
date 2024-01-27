import React, { Component } from 'react';
import './App.css'
class App extends Component {
  // Initial state with person details, show state, and mounted time
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'John Wick',
        bio: 'A skilled and determined assassin seeking justice for his beloved dog.',
        imgSrc: './images/image.jpeg',
        profession: 'Ex-assassin',
      },
      show: false,
      mountedTime: 0,
    };
  // Binding methods to the component instance
    this.toggleShow = this.toggleShow.bind(this);
  }



// Lifecycle method: runs after the component has been added to the DOM
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
// Toggle the show state when the button is clicked
  toggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }
// Render method: defines the structure of the component
  render() {
    const { person, show, mountedTime } = this.state;

    return (
      <div className='App'>
        <h1>Profile App</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>

        {show && (
          <div className='info'>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Time since mount: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
