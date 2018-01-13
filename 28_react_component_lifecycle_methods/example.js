class SomeComponent extends React {
  constructor(props) {
    super(props);

    this.state = {
      whatever: this.props.whatever
    }
  }


  render() {
    <ChildComponent1/>
    <ChildComponent2/>
    <AnotherOne props=whatever>
      <AnotherOneAgain/>
    </AnotherOne>
  }
}


class ChildComponent1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props
  }

  render() {
    <div>
     {this.props.whatever}
  </div>

  }
}




const AnotherOneAgain = (props) => {

  return (
    <div>
      <h1>some data {props.blah}</h1>
    </div>
  )
}
