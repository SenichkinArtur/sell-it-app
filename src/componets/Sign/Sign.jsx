import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Sign.css';

import logo from "../../images/logo-sign.png";


class Sign extends Component {
    state = {
        activeSignIn: true,
    }

    showSignInTab() {
        this.setState({
            activeSignIn: true,
        })
    }
    showSignUpTab() {
        this.setState({
            activeSignIn: false,
        })
    }

    render() {

        return (
            <div>
                <section className="main">
                    <div className="sign-block-wrap">
                        <Link to="/"><img src={logo} alt="" /></Link>
                        <div className="tabs-select">
                            <button className={`tabs-select__button ${this.state.activeSignIn ? "tabs-select__button_active" : ""}`} onClick={() => this.showSignInTab()}>Sign In</button>
                            <button className={`tabs-select__button ${!this.state.activeSignIn ? "tabs-select__button_active" : ""}`} onClick={() => this.showSignUpTab()}>Sign Up</button>
                        </div>
                        {this.state.activeSignIn ?
                            <div className="sign-block sign-block__sign-in">                
                                <form action="">
                                    <input className="form__input" type="email" placeholder="Email" onChange={()=>this.onChange} />
                                    <input className="form__input" type="password" placeholder="Password" />
                                    <input className="form__input form__submit" type="submit" value="Login" />
                                </form>
                            </div>
                            :
                            <div className="sign-block sign-block__sign-up">                
                                <form action="">
                                    <input className="form__input" type="email" placeholder="Email" />
                                    <input className="form__input" type="password" placeholder="Password" />
                                    <input className="form__input form__submit" type="submit" value="Sign Up" />
                                </form>
                            </div>
                        }
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Sign;