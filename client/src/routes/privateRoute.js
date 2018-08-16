import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import "./navbar.css";
//import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import {user} from 'react-icons-kit/ikons/user';
import {book} from 'react-icons-kit/oct/book';
import {university} from 'react-icons-kit/ionicons/university';
import {home} from 'react-icons-kit/iconic/home';
import {bell} from 'react-icons-kit/icomoon/bell'

import history from "../history";
import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


export const PrivateRoute = ({ component: Component, ...rest }) => (

  <Router history = {history}>
     <Route render={({ location, history }) => (
         <React.Fragment>
         <header>
              <button type="button" className="btn btn-default" onClick = {()=>{localStorage.removeItem('user');
               history.push('/')}}>
              <span className="glyphicon glyphicon-log-out"></span>Logout</button>
                 </header>
         <div className="main" style = {{
           width: '180px',
           height: '100%',
           background: '#2c3e50',
           color: '#FFF',
           position: 'fixed'
         }}>
             <SideNav
                 onSelect={(selected) => {
                     const to = '/' + selected;
                     if (location.pathname !== to) {
                         history.push(to);
                     }
                 }}
                 highlightcolor='#E91E63' highlightbgcolor='#00bcd4'

             >
                 <SideNav.Toggle />
                            <SideNav.Nav defaultSelected={`${location.pathname.slice(1)}`}>

                               <NavItem eventKey="admin">
                                   <NavIcon>
                                       <SvgIcon className="icon" size={20} icon={home}/>
                                   </NavIcon>
                                   <NavText className="text"> Dashboard </NavText>
                               </NavItem>
                               <NavItem eventKey="admin/students">
                                   <NavIcon>
                                       <SvgIcon className="icon"  size={20} icon={university}/>
                                   </NavIcon>
                                   <NavText className="text"> Students </NavText>
                               </NavItem>
                               <NavItem eventKey="admin/classes">
                                   <NavIcon>
                                       <SvgIcon className="icon" size={20} icon={bell}/>
                                   </NavIcon>
                                   <NavText className="text"> Classes </NavText>
                               </NavItem>
                               <NavItem eventKey="admin/courses">
                                   <NavIcon>
                                       <SvgIcon className="icon" size={20} icon={book}/>
                                   </NavIcon>
                                   <NavText className="text"> Courses </NavText>
                               </NavItem>
                               <NavItem eventKey="admin/teachers">
                                   <NavIcon>
                                       <SvgIcon className="icon" size={20} icon={user}/>
                                   </NavIcon>
                                   <NavText className="text"> Teachers </NavText>
                                </NavItem>
                              </SideNav.Nav>
             </SideNav>
             </div>
             <main>
             <Route {...rest} render={props => (
                 localStorage.getItem('user')
                     ? <Component {...props} />
                     : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
             )} />
             </main>
         </React.Fragment>
     )}
     />
 </Router>


)
