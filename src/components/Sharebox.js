import React from 'react';
import { connect } from 'react-redux';

class Sharebox extends React.component {
  constructor(props) {
    super(props);
  }

  render() {
    let tweetContent = `twitter.com/intent/tweet?text=${this.props.textForShare} -${this.props.author}`;
    return (
      <div><a href={tweetContent} id="tweet-quote">Tweet this take!</a></div>
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