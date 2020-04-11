import React, {Component} from 'react';

export class FormDate extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        // const {values, handleChange} = this.props;

        return (<div className="date-container">
            <div className="input-container">
                <input type="date" />
                <input type="time" />
            </div>
            <p className="choose-date-title">Choose the time that suits you</p>
            <div className="suggestion-container">
                <button>11:45</button>
                <button>12:55</button>
                <button>08:45</button>
                <button>09:15</button>
                <button>10:25</button>
            </div>

            <div className="date-button-container">
                <button className="neuro-btn" onClick={this.continue}>Continue</button>
                <button className="neuro-btn" onClick={this.back}>Back</button>
            </div>
        </div>
        );
    }
}
