import React from 'react';
import "./classes.css"
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import  history  from '../../history';
import { logout, getClasses, deleteClasses, addClasses, updateClasses  } from '../../actions/';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import {user} from 'react-icons-kit/ikons/user';
import {book} from 'react-icons-kit/oct/book';
import {university} from 'react-icons-kit/ionicons/university';
import {home} from 'react-icons-kit/iconic/home';




class Classes extends React.Component {
  addClasses = (e) => {
        e.preventDefault();
        const name = this.addName.value;
        const description = this.addDescription.value;


        this.props.addClasses(name, description);
        this.props.getClasses();
    };

  deleteClasses = (e) => {
        e.preventDefault();
        const id = this.deleteId.value;

        this.props.deleteClasses(id);
        this.props.getClasses();
    };

  updateClasses = (e) => {
        e.preventDefault();
        const id = this.updateId.value;
        const description = this.updateDescription.value
        this.props.updateClasses(id,description)
        this.props.getClasses();
    };

    componentDidMount() {
       this.props.getClasses();
    }
    render() {
      const styles = {
          width: '180px',
          height: '100%',
          background: '#2c3e50',
          color: '#FFF',
          position: 'fixed',
    };
    const context = this.props;
    return (
      <div className="main">
      <h1 className="head"> Classes </h1>
      <div style={styles}>
      <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' selected='classes' onItemSelection={ (id, parent) => {history.push(`../admin/${id}`)}}>
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
  <div className="container">
      <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Class</button>
      <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Add a new Class</h4>
                  </div>
                  <div className="modal-body">
                      <form  onSubmit={this.addClasses}>
                          <input type="text" id="aname" name="name" placeholder="Name of the class.." ref={(input) => this.addName = input}/>
                          <input type="text" id="aname" name="description" placeholder="Description.." ref={(input) => this.addDescription = input}/>

                          <input className="submit" type="submit" value="Submit" />
                      </form>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div>
      <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#exampleModal">
          Edit Class
      </button>
      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                      <h4 className="modal-title" id="exampleModalLabel">Edit a Class</h4>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      </button>
                  </div>
                  <div className="modal-body">
                      <form onSubmit={this.updateClasses}>
                          <input type="text" id="id" name="id" placeholder="Enter the id.."ref={(input) => this.updateId = input}/>
                          <input type="text" id="ename" name="name" placeholder="New name.." ref={(input) => this.updateDescription = input}/>
                          <input type="submit" value="Submit" />
                      </form>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
  </div>

        <button type="button" className="btn btn-default" onClick={this.props.logout}>
        <span className="glyphicon glyphicon-log-out"></span>Logout</button>
        <table className="classes">
        <tr>
           <th>name</th>
           <th>description</th>
           <th>actions</th>
         </tr>
        { this.props.classesArray.map(function(classesObject) {

            return(<tr>
                   <td>{classesObject.name}</td>
                   <td>{classesObject.description}</td>
                   <td>
                   <button onClick = {()=>{
                               context.deleteClasses(classesObject.id);
                               context.getClasses()}}>
                      Delete
                    </button>
                     <button >
                       Edit
                     </button>
                   </td>
               </tr>
        )})

      }
        </table>
      </div>
    )
  }
}
function mapStateToProps(state) {

    return {
      classesArray: state.getClassesArray.classesArray
    };
}

export default connect(mapStateToProps, {logout, getClasses, deleteClasses, addClasses, updateClasses})(Classes);
