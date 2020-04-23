import HomePageController from './home-page-controller';
import React, { Component }from 'react';


class TodoPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <HomePageController outPage='/home' userId={this.props.userId}/>
    );
  }
}

export default TodoPage;