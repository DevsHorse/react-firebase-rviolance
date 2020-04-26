import React, { Component } from 'react';
import fire from 'firebase';

class EditOrCreatePage extends Component {
  constructor(props) {
    super(props);
    this.pageMod = this.props.location.state.mode;
    this.pageTitle = this.pageMod === 'create' ? 'New todo' : 'Edit todo';
    this.pageSuccessBtn = this.pageMod === 'create' ? 'Add' : 'Save';
    this.itemId = this.props.location.state.id;
  }

  state = {
    title: 
    this.props.location.state.item ?
     this.props.location.state.item.title : '',
    description:
     this.props.location.state.item ?
      this.props.location.state.item.description : '',
    deadline: 
     this.props.location.state.item ?
      this.props.location.state.item.deadline : '',
    done:
     this.props.location.state.item ?
      this.props.location.state.item.done : false
  }

  handleSend() {

    if (this.state.deadline === null) {
      return;
    }

    let userId = fire.auth().currentUser.uid;
    
    if (this.pageSuccessBtn === 'Add') {
      fire.database().ref('users/' + userId + '/todos/').push().set({
        title: this.state.title,
        description: this.state.description,
        deadline: this.state.deadline,
        done: this.state.done
      });

      this.props.history.goBack();
    } else if (this.pageSuccessBtn === 'Save') {
      fire.database().ref('users/' + userId + '/todos/' + this.itemId).update({
        title: this.state.title,
        description: this.state.description,
        deadline: this.state.deadline,
        done: this.state.done
      });

      this.props.history.goBack();
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {      
    return (
      <section className="create-or-edit-page section">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-5 border border-secondary rounded bg-dark p-3">
            <h1 className="text-white text-center">{this.pageTitle}</h1>
            <form>
              <div className="row text-white justify-content-center">
                <div className="col-10">

                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                          id="title"
                          type="text"
                          className="form-control"
                          placeholder="Title"
                          onChange={this.handleChange}
                          name='title'
                          value={this.state.title}/>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                          className="form-control"
                          id="description" rows="3"
                          onChange={this.handleChange}
                          name='description'
                          value={this.state.description}></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label className="d-inline-block" htmlFor="inputDate">Deadline:</label>
                         <input
                            id="inputDate"
                            type="datetime-local"
                            className="form-control"
                            placeholder="Time or date"
                            onChange={this.handleChange}
                            name='deadline'
                            value={this.state.deadline}
                            required/>
                      </div>
                    </div>
                  </div>


                  <div className="row justify-content-center">
                    <div className="col-3">
                      <button type="button"
                       className="btn btn-success btn-block"
                        onClick={this.handleSend.bind(this)}>{this.pageSuccessBtn}</button>
                    </div>
                    <div className="col-3">
                      <button type="button"
                       className="btn btn-danger btn-block"
                        onClick={() => this.props.history.goBack()}>Back</button>
                    </div>
                  </div>

                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default EditOrCreatePage;