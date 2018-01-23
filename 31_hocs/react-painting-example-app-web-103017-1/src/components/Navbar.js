import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from './Button';

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
  'grey'
];

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color || 'purple'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color: newColor });
  }

  render() {
    const loggedIn = !!this.props.currentUser.id;
    return (
      <div className={`ui top fixed inverted ${this.state.color} menu`}>
        <Link to="/" className="item">
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`} />
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
          </h2>
        </Link>
        <div className="right menu">
          <Link to="/paintings" className="item">
            index
          </Link>
          <Link to="/paintings/new" className="item">
            new
          </Link>
          {loggedIn ? (
            <div className="item">
              Welcome {this.props.currentUser.username}
            </div>
          ) : (
            <Link to="/login" className="item">
              <Button text="Log in" />
            </Link>
          )}
          {loggedIn ? (
            <div className="item">
              <Button
                onClick={() => {
                  this.props.handleLogout();
                  this.props.history.push('/login');
                }}
                text="Log Out"
              />
            </div>
          ) : null}
          <div className="item">
            <Button onClick={this.handleClick} text="Change Color" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
