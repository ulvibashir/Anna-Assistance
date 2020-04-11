import React, {Component} from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Confirm extends Component {

    continue = e => {
        e.preventDefault();
        //******************
        //Process form here send request
        //******************
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: {
                firstName, lastName, email, category, date
            }
        } = this.props;

        return (
            <div style={styles.container}>
                <MuiThemeProvider>
                    <React.Fragment>

                        <List>
                            <ListItem
                                primaryText="First Name"
                                secondaryText={firstName}
                            />
                            <ListItem
                                primaryText="Last Name"
                                secondaryText={lastName}
                            />
                            <ListItem
                                primaryText="Email"
                                secondaryText={email}
                            />
                            <ListItem
                                primaryText="Date"
                                secondaryText={date}
                            />
                            <ListItem
                                primaryText="Category"
                                secondaryText={category}
                            />
                        </List>
                        <br/>
                        <RaisedButton
                            label="Confirm & Continue"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                        />
                        <RaisedButton
                            label="Back"
                            primary={false}
                            style={styles.button}
                            onClick={this.back}
                        />
                    </React.Fragment>
                </MuiThemeProvider>
            </div>
        );
    }
}

const styles = {
    button: {
        margin: 15
    },
    container: {
        marginLeft: "40px",
        marginRight: "40px"
    }
};

