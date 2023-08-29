import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from "./Payments";


class Header extends Component {
  renderContent(){
    switch(this.props.auth){
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <Fragment>
            <li>
              <Payments />
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </Fragment>
        );
    }
  }

  render() {
    return (
      <Fragment>
        <nav>
          <div className="nav-wrapper">
            <Link 
            to={this.props.auth ? '/surveys' : '/'}
            className="brand-logo">
              Exmail
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

function mapStateToProps({auth}){
  return {auth};
}
export default connect(mapStateToProps)(Header);
