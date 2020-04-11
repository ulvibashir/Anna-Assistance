import React, { Component } from 'react';

import { FormUserDetails } from "./FormUserDetails";
import { FormCategory } from "./FormCategory";
import { FormDate } from "./FormDate";
import { Confirm } from "./Confirm";

export class Options extends Component {
    state = {
        step: 3,
        firstName: "",
        lastName: "",
        email: "",
        date: "",
        category: ""
    };

    //Proceed to next step

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    };

    //Proceed to previous step

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    };

    //Handle fields change

    handleChange = input => e => {
        console.log(input, e);
        this.setState({ [input]: e.target.value })
    };

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, category, date } = this.state;

        const values = { firstName, lastName, email, category, date };

        return (
            <div className="main-container">
                <div>
                    <div className="main-header-item">
                        <h1 className="main-head">Consultation activity</h1>
                        <p className="info-text">Zəhmət olmasa aşağıdakıları doldurun</p>
                    </div>
                    <div className="consultation-section">
                        <div className="consultation-item ">
                            <div className={step === 1 ?
                                "item-number active-circle" :
                                "item-number done"}>1
                    </div>
                            <div className="line-horizontal" />
                            <div className={step === 1 ? "consultation-item-info active" : "consultation-item-info done"}>
                                <span className="consultation-text">Personal info</span>
                                <i className={step === 1 ? "fas fa-chevron-right right-icon icon-active" :
                                    "fas fa-chevron-right right-icon"} />

                            </div>
                        </div>
                        <div className="line-vertical" />
                        <div className="consultation-item ">
                            <div className={
                                step === 2 ? "item-number active-circle" :
                                    step < 2 ? "item-number" :
                                        "item-number done"}>
                                2
                    </div>
                            <div className="line-horizontal" />
                            <div className={
                                step === 2 ? "consultation-item-info active" :
                                    step < 2 ? "consultation-item-info" :
                                        "consultation-item-info done"}>
                                <span className="consultation-text">Select the disease</span>
                                <i className={
                                    step === 2 ? "fas fa-chevron-right right-icon icon-active" :
                                        "fas fa-chevron-right right-icon"} />
                            </div>
                        </div>
                        <div className="line-vertical" />
                        <div className="consultation-item">
                            <div className={
                                step === 3 ? "item-number active-circle" :
                                    step < 3 ? "item-number" :
                                        "item-number done"}>
                                3
                    </div>
                            <div className="line-horizontal" />
                            <div className={
                                step === 3 ? "consultation-item-info active" :
                                    step < 3 ? "consultation-item-info" :
                                        "consultation-item-info done"}>
                                <span className="consultation-text">Choose date</span>
                                <i className={
                                    step === 3 ? "fas fa-chevron-right right-icon icon-active" :
                                        "fas fa-chevron-right right-icon"} />
                            </div>
                        </div>
                        <div className="line-vertical" />
                        <div className="consultation-item">
                            <div className={
                                step === 4 ? "item-number active-circle" :
                                    step < 4 ? "item-number" :
                                        "item-number done"}>
                                4
                    </div>
                            <div className="line-horizontal" />
                            <div className={
                                step === 4 ? "consultation-item-info active" :
                                    step < 4 ? "consultation-item-info" :
                                        "consultation-item-info done"}>
                                <span className="consultation-text">Confirm the results</span>
                                <i className={
                                    step === 4 ? "fas fa-chevron-right right-icon icon-active" :
                                        "fas fa-chevron-right right-icon"} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner-main-container">

                    <div className="form-right-container">
                    {step === 1 &&
                        <FormUserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values} />
                    }
                    {step === 2 &&
                        <FormCategory
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values} />
                    }
                    {
                        step === 3 &&
                        <FormDate nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values} />
                    }
                    {
                        step === 4 &&
                        <Confirm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={values}
                        />
                    }
                </div>

                </div>

            </div>
        )

    }
}

