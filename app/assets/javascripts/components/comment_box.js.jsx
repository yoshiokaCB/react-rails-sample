class CommentBox1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='commentBox'>
        <h1>Hello world!</h1>
        <p>notice:{this.props.notice}</p>
      </div>
    );
  }
}
