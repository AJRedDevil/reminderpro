import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../App.css';
import { addReminder } from '../actions';
// import { bindActionCreators } from 'redux';

class App extends Component {
    state = {
        text: ''
    }

    addReminder = () => {
        this.props.addReminder(this.state.text);
    }
    
    render() {
        console.log('this.props', this.props);
        return (
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="I have to..."
                            onChange={event => this.setState({text: event.target.value})}
                        />                        
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={this.addReminder}
                    >
                        Add Reminder
                    </button>
                </div>
            </div>
        )
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({addReminder}, dispatch);
// }

// export default connect(null, mapDispatchToProps)(App);

function mapStateToProps(state) {
    return {
        reminders: state
    };
}

export default connect(mapStateToProps, { addReminder })(App);