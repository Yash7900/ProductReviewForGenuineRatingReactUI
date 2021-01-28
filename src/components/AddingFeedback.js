import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionCreators from '../actions/UserAction'

class AddingFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.feedbackAbout = React.createRef();
    this.feedbackDescription = React.createRef();
    this.state = {
      feedbackAboutError: '',
      feedbackDescriptionError: ''
    }
  }
  componentDidMount() {
    this.props.clearState()
  }
  // componentDidUpdate() {
  //     let check = this.props.returnedMessage.split(' ')
  //      if (check[0] === 'Successfully') {
  //          setTimeout(() => {
  //              this.props.history.push('/')
  //          }, 2000)
  //      }
  //  }
  validate = (e) => {
    let { feedbackAboutError, feedbackDescriptionError } = this.state
    if (!this.feedbackAbout.current.value) {
      feedbackAboutError = "This field can not be blank"
    }
    if (!this.feedbackDescription.current.value) {
      feedbackDescriptionError = "This description field can not be blank"
    }
    if (feedbackAboutError || feedbackDescriptionError) {
      this.setState({ feedbackAboutError, feedbackDescriptionError })
      setTimeout(() => {
        this.setState({ feedbackAboutError: '', feedbackDescriptionError: '' })

      }, 1000);
      return false;
    }

    return true;

  }
  addFeedback(e) {
    const valid = this.validate(e)
    if (valid === true) {
      let Feedback = {
        feedbackAbout: this.feedbackAbout.current.value,
        feedbackDescription: this.feedbackDescription.current.value
      }
      this.props.onAddFeedback(Feedback)
      this.props.history.push('/user')
    }
  }
  render() {
    return (
      <div style={{marginTop:'10%'}}>
        <div className="container mt-5 px-3 py-3 border border-dark rounded bg-light text-dark" style={{width:'50%'}}>
          <div className="row">
            <div className="col">
              <form>
                <div className="mb-3 row">
                  <label htmlFor="feedback-about" className="col-sm-4 col-form-label">
                    Feedback About<span style={{color:'red'}}>*</span>
                    </label>
                  <div className="col-sm-5 ">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      ref={this.feedbackAbout}
                      name="feedbackAbout"
                      required
                    /><br />
                    <div className="font-size-small text-danger">{this.state.feedbackAboutError}</div>
                  </div>
                </div>

                <div className="mb-3 row">
                  <label htmlFor="feedback-description" className="col-sm-4 col-form-label">
                    Feedback Description <span style={{color:'red'}}>*</span>
                    </label>
                  <div className="col-sm-5">
                    <textarea
                      type="text"
                      className="form-control form-control-sm"
                      ref={this.feedbackDescription}
                      name="feedbackDescription"
                      required
                    /><br />
                    <div className="font-size-small text-danger">{this.state.feedbackDescriptionError}</div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <button type='button'
                      className="btn btn-primary btn-sm"
                      onClick={this.addFeedback.bind(this)}
                    >
                      Add Feedback
                      </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    returnedMessage: state.returnedMessage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddFeedback: (feedback) => {
      dispatch(actionCreators.addFeedback(feedback))
    },
    clearState: () => {
      dispatch(actionCreators.clearState())

    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddingFeedback))