import HomePageController from './home-page-controller';
import React, { Component }from 'react';

class EditPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomePageController outPage='/edit' userId={this.props.userId}/>
    );
  }
}


export default EditPage;