import React, { Component }from 'react';

class Success extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.redirectToHomePage(10000);
  }

  redirectToHomePage = time => {
    setTimeout(() => {
      this.props.history.push('/home');
    }, time);
  }

  render() {
    return (
      <section className="success-page section">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-6 border border-light rounded bg-success p-3">
            <h1 className="text-white text-center">Register complited!</h1>
            <div className="row justify-content-center">
              <div className="col-4">
                <button className="btn btn-sm btn-dark mb-2 btn-block" onClick={() => this.redirectToHomePage(0)}>Continue</button>
              </div>
            </div>
          </div>
        </div>
    </section>
    );
  }
}

export default Success;