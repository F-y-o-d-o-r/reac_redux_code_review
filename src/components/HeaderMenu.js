import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'main' };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    if (name === 'news') {
    }
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item>
          <Link to="/">
            <Button name="main" active={activeItem === 'main'} onClick={this.handleItemClick}>
              Main
            </Button>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login/">
            <Button name="login" active={activeItem === 'login'} onClick={this.handleItemClick}>
              Log-in
            </Button>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/news/">
            <Button name="news" active={activeItem === 'news'} onClick={this.handleItemClick}>
              News
            </Button>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/profile/">
            <Button name="profile" active={activeItem === 'profile'} onClick={this.handleItemClick}>
              Profile
            </Button>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  state
});
const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps)(HeaderMenu);