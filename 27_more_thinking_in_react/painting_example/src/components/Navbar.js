import React from 'react';
import {Link} from 'react-router-dom'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black'
];

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { color: 'violet' };

    this.handleChangeClick = this.handleChangeClick.bind(this);
  }

  handleChangeClick() {
    // TOTALLY WRONG : (
    // props.color = 'blue';
    // ALSO TOTALLY WRONG
    // this.state.color = 'blue'
    // cant destructively modify state
    // console.log('this in handleChnageCLick', this);
    const color = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color: color });
  }

  render() {
    return (
      <div className={`ui inverted ${this.state.color} menu`}>
        <Link to="/" className="item">
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`} />
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
          </h2>
        </Link>
        <div className="right menu">
          <Link to='/login' className="item">
            Login
          </Link>
          <Link to="/paintings" className="item">
            Index
          </Link>
          <Link to='paintings/new' className="item">
            New
          </Link>
          <div className="item">
            <div onClick={this.handleClick} className="ui button">
              Change Color
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
