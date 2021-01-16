class Sharebox extends React.component {
  constructor(props) {
    super(props);
  }

  render() {
    let urlEncodedText = 'percent me here plz';
    return (
      <div><a href="twitter.com/intent/tweet?text={urlEncodedText}" id="tweet-quote">Tweet this take!</a></div>
    )
  }
}