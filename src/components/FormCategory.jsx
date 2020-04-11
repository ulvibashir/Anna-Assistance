import React, { Component } from 'react';

import { tree, getLabel } from '../commons';




export class FormCategory extends Component {

    state = {
        currentCat: this.props.values.category
            ? tree.findBFS(tree.findBFS(this.props.values.category).parent)
            : tree.root,
        label: this.props.values.category
            ? getLabel(tree.findBFS(tree.findBFS(this.props.values.category).parent).data)
            : getLabel(tree.root.data)
    }


    nextCat = e => {
        const { nextStep, handleChange } = this.props;

        if (!tree.findBFS(e.target.name).children.length) {
            nextStep();
            (handleChange('category'))(e);
        }

        this.setState({
            currentCat: tree.findBFS(e.target.name),
            label: getLabel(e.target.name)
        })
    }

    prevCat = () => {
        if (tree.findBFS(this.state.currentCat.data) !== tree.root) {
            this.setState({
                currentCat: tree.findBFS(this.state.currentCat.parent),
                label: getLabel(tree.findBFS(this.state.currentCat.parent).data)
            })
        } else {
            this.back();
        }
    }


    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = () => {
        this.props.prevStep();
    };

    render() {
        const { currentCat, label } = this.state;
        return (<div className="category-container">

            <div className="category-info-div">
                <button
                    className="neuro-btn"
                    onClick={this.prevCat}>←</button>
                <p>{label}</p>
            </div>


            {currentCat.children.length &&
                <div className="category-item-container">
                    {currentCat.children.map((item, id) => (
                        <button
                            name={item.data}
                            value={item.data}
                            onClick={this.nextCat}
                            className="category-item"
                            key={id}>{item.data}</button>
                    ))}
                </div>
            }
        </div>
        );
    }
}


