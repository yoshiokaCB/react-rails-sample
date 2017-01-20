var CommentBox = React.createClass({
  render: function() {
    return(
      <h1>Hello React!</h1>
    )
  }
});

class CommentBox1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='commentBox'>
        Hello, world! I am a CommentBox.{this.props.url}
      </div>
    );
  }
}
