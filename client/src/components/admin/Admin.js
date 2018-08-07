import React from 'react';
import "./admin.css"
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import  history  from '../../history';
import { logout } from '../../actions/';
import { PrivateRoute } from '../../routes/privateRoute';

import LoginPage from '../login/Login';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import {user} from 'react-icons-kit/ikons/user';
import {book} from 'react-icons-kit/oct/book';
import {university} from 'react-icons-kit/ionicons/university'
import {home} from 'react-icons-kit/iconic/home'
import studentsImg from "./adminStudent.jpg"



class Admin extends React.Component {

    render() {
      const styles = {
          width: '180px',
          height: '100%',
          background: '#2c3e50',
          color: '#FFF',
          position: 'fixed',
    };

    return (
      <div className="main" >
      <div classNam="header">
        <h1 className="head"> Welcome to your School Website </h1>
        <div className="content">
          <img src={studentsImg} className="background-image" alt="Students image"/>
          <p className="descr"> This school is one of the best in the regions. Here you would feel yourself like at home </p>
        </div>
      </div>
      <div style={styles}>
      <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' selected='' onItemSelection={ (id, parent) => {history.push(`../admin/${id}`)}}>
          <Nav id=''>
              <NavIcon><SvgIcon size={20} icon={home}/></NavIcon>
              <NavText> Dashboard </NavText>
          </Nav>
          <Nav id='students'>
              <NavIcon><SvgIcon size={20} icon={university}/></NavIcon>
              <NavText> Students </NavText>
          </Nav>
          <Nav id='classes'>
              <NavIcon><SvgIcon size={20} icon={book}/></NavIcon>
              <NavText> Classes </NavText>
          </Nav>
          <Nav id='teachers'>
              <NavIcon><SvgIcon size={20} icon={user}/></NavIcon>
              <NavText> Teachers </NavText>
          </Nav>
      </SideNav>
  </div>
        <button type="button" className="btn btn-default" onClick={this.props.logout}>
        <span className="glyphicon glyphicon-log-out"></span>Logout</button>

      </div>
    )
  }
}

function mapStateToProps(state) {

    return {};
}

export default connect(mapStateToProps, {logout})(Admin);
