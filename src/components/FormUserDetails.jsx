import React, { Component } from 'react';

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;

        return (<div className="fields-container">

            <label
                htmlFor="first-name-input"
                className={values.firstName ? 'field-label active-field' : 'field-label'}>First Name</label>
            <input
                id="first-name-input"
                className="field-input"
                type="text"
                placeholder="First name"
                onChange={handleChange("firstName")}
                value={values.firstName}
            />

            <label
                htmlFor="last-name-input"
                className={values.lastName ? 'field-label active-field' : 'field-label'}>Last  Name</label>
            <input
                id="last-name-input"
                className="field-input"
                type="text"
                placeholder="Last name"
                onChange={handleChange("lastName")}
                value={values.lastName}
            />

            <label
                htmlFor="email-input"
                className={values.email ? 'field-label active-field' : 'field-label'}>Email</label>
            <input
                id="email-input"
                className="field-input"
                type="text"
                placeholder="Email"
                onChange={handleChange("email")}
                value={values.email}
            />

            <button
                className="neuro-btn"
                onClick={this.continue}>Continue</button>

        </div>
        );
    }
}

