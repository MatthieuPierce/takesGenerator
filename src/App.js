import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Sharebox from './components/Sharebox'
import { connect } from 'react-redux';
import { nextQuote } from './redux/actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
  }

  handleNext = () => {
    this.props.nextQuote();
  }

  render() {
    return (
      <div className="App">
        <div id="quote-box">
          <h1>Take Box</h1>
          <div id="text" value={this.props.text}></div>
          <div id="author" value={this.props.author}></div>
          <button id="next-button" onClick={this.handleNext}>Next Take</button>
          <Sharebox />
        </div>
      </div>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
}

//Redux connections
const mapStateToProps = (state) => {
  return {
    text: state.text,
    author: state.author
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    nextQuote: function() {
      dispatch(nextQuote());
    }
  });
}

//Sample Redux notes
//Two-step connect
// 1) `connect` returns a new function that accepts the component to wrap:
// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// 2) and that function returns the connected, wrapper component:
// const ConnectedComponent = connectToStore(Component);
// // One-step connect (curried)
// connect(mapStateToProps, mapDispatchToProps)(Component);

export default connect(mapStateToProps, { nextQuote })(App);
