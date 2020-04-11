import React, {Component} from 'react';
import './Header.css'
import pp from './pp.jpg'

export class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="profil">
                    <img src={pp} className="profil-img" alt=""/>
                </div>
                <div className="header-item header-flex">
                    <div className="item">
                        <div className="item-info">
                            <i className="fas fa-info-circle info"/>
                            doctor info
                        </div>
                        <div className="item-text">Rauf Ismayilov</div>
                    </div>

                </div>
                <div className="line"/>
                <div className="header-item">
                    <div className="item">
                        <div className="item-info">
                            <i className="fas fa-graduation-cap prof"/>
                            profession
                        </div>
                        <div className="item-text">Heart problems</div>
                    </div>

                </div>
                <div className="line"/>
                <div className="header-item">
                    <div className="item">
                        <div className="item-info">
                            <i className="far fa-star certificate"/>
                            certificate
                        </div>
                        <div className="item-text">Lorem ipsum</div>
                    </div>

                </div>
                <div className="line"/>
                <div className="header-item">
                    <div className="item">
                        <div className="item-info">
                            <i className="far fa-thumbs-up recommen"/>
                            next recommendation
                        </div>
                        <div className="item-text">Chest examination</div>
                    </div>

                </div>
                <div className="line"/>
                <div className="header-item">
                    <div className="item">
                        <div className="item-info">
                            <i className="fas fa-mobile-alt contact"/>
                            contact info
                        </div>
                        <div className="item-text">+994 55 822 05 85</div>
                    </div>

                </div>
            </div>
        )
    }
}