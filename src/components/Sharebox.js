import React from 'react';
import { connect } from 'react-redux';
import './Sharebox.css';

class Sharebox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tweetContent = `https://twitter.com/intent/tweet?text=${this.props.textForShare} -${this.props.author}`;
    return (
      <div className="sharebox"><a href={tweetContent} target="_blank" id="tweet-quote" rel="noreferrer">Tweet Take</a></div>
    )
  }
}

//redux connections for sharebox

const mapStateToProps = (state) => {
  return {
    textForShare: state.text,
    author: state.author
  };
}

export default connect(mapStateToProps)(Sharebox);