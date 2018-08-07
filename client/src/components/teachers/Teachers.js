import React from 'react';
import "./teachers.css"
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import  history  from '../../history';
import { logout, getTeachers, deleteTeacher, addTeacher, updateTeacher, rawDetecor, isModalOpen} from '../../actions/';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import {user} from 'react-icons-kit/ikons/user';
import {book} from 'react-icons-kit/oct/book';
import {university} from 'react-icons-kit/ionicons/university';
import {home} from 'react-icons-kit/iconic/home';
import Modal from '../modal.js'



class Teachers extends React.Component {
    constructor(props){
    super(props);

    this.updatedTeacherObject = {
      firstName: null,
      lastName: null,
      age: null,
      gender: null,
      phone: null,
      email: null
    }
  }
    addTeacher = (e) => {
          e.preventDefault();
          const firstName = this.addFirstName.value;
          const lastName = this.addlastName.value;
          const age = this.addAge.value
          const gender = this.addGender.value;
          const phone = this.addPhone.value;
          const email = this.addEmail.value;

          this.props.addTeacher(firstName,lastName,age,gender,phone,email);
          this.props.getTeachers();
      };



    updateTeacher = (e) => {


          this.props.updateTeacher(this.updatedTeacherObject);
          this.props.getTeachers();
      };

      componentDidMount() {
         this.props.getTeachers();
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
    const self = this;

    return (
      <div className="main">
      <div style={styles}>
          <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' selected='teachers' onItemSelection={ (id, parent)=> {history.push(`../admin/${id}`)}}>
              <Nav id=''>
                  <NavIcon>
                      <SvgIcon size={20} icon={home}/>
                  </NavIcon>
                  <NavText> Dashboard </NavText>
              </Nav>
              <Nav id='students'>
                  <NavIcon>
                      <SvgIcon size={20} icon={university}/>
                  </NavIcon>
                  <NavText> Students </NavText>
              </Nav>
              <Nav id='classes'>
                  <NavIcon>
                      <SvgIcon size={20} icon={book}/>
                  </NavIcon>
                  <NavText> Classes </NavText>
              </Nav>
              <Nav id='teachers'>
                  <NavIcon>
                      <SvgIcon size={20} icon={user}/>
                  </NavIcon>
                  <NavText> Teachers </NavText>
              </Nav>
          </SideNav>
      </div>
      <div className="container">
          <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Teacher</button>
          <div className="modal fade" id="myModal" role="dialog">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                          <h4 className="modal-title">Add a new Teacher</h4>
                      </div>
                      <div className="modal-body">
                          <form onSubmit={this.addTeacher}>
                              <input type="text" id="afname" name="afirstname" placeholder="First name.." ref={(input)=> this.addFirstName = input}/>
                              <input type="text" id="alname" name="alastname" placeholder="Last name.." ref={(input)=> this.addlastName = input}/>
                              <input type="text" id="aemail" name="aemail" placeholder="Email.." ref={(input)=> this.addEmail = input}/>
                              <input type="text" id="plname" name="aphone" placeholder="Phone.." ref={(input)=> this.addPhone = input}/>
                              <input type="text" id="alname" name="aage" placeholder="Age.." ref={(input)=> this.addAge = input}/>
                              <input type="text" id="glname" name="agender" placeholder="Gender.." ref={(input)=> this.addGender = input}/>
                              <input className="submit" type="submit" value="Submit" />
                          </form>
                      </div>
                      <div className="modal-footer">
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <button type="button" className="btn btn-default" onClick={this.props.logout}>
          <span className="glyphicon glyphicon-log-out"></span>Logout</button>
      <table className="teachers">
          <tr className="header">
              <th>firstname</th>
              <th>lastname</th>
              <th>gender</th>
              <th>phone</th>
              <th>email</th>
              <th>age</th>
              <th>options</th>
          </tr>
          { this.props.teachersArray.map((teacherObject, index) => { if(this.props.raw === index){ this.updatedTeacherObject = context.teachersArray[index]; } return(
          <tr>
              <td>{teacherObject.firstName}</td>
              <td>{teacherObject.lastName}</td>
              <td>{teacherObject.gender}</td>
              <td>{teacherObject.phone}</td>
              <td>{teacherObject.email}</td>
              <td>{teacherObject.age}</td>
              <td>
                  <button className="white" onClick={ ()=>{ context.rawDetecor(index); context.isModalOpen('second'); }}> Delete
                  </button>
                  <button className="gray" onClick={ ()=> { context.rawDetecor(index); context.isModalOpen('first'); }}> Edit
                  </button>
              </td>
          </tr>
          )}) }
      </table>
      <Modal show={this.props.showModal==='first' } handleClose={()=>{this.props.isModalOpen()}}>
          <div className="modal-body">
              <form>
                  <input type="text" id="afname" name="firstname" defaultValue={this.updatedTeacherObject.firstName} onChange={ e=> {this.updatedTeacherObject.firstName=e.target.value;}} />
                  <input type="text" id="alname" name="lastname" defaultValue={this.updatedTeacherObject.lastName} onChange={ e=> this.updatedTeacherObject.lastName=e.target.value}/>
                  <input type="text" id="aemail" name="email" defaultValue={this.updatedTeacherObject.email} onChange={ e=> this.updatedTeacherObject.lastName=e.target.value}/>
                  <input type="text" id="plname" name="phone" defaultValue={this.updatedTeacherObject.phone} onChange={ e=> this.updatedTeacherObject.phone=e.target.value}/>
                  <input type="text" id="alname" name="age" defaultValue={this.updatedTeacherObject.age} onChange={ e=> this.updatedTeacherObject.age=e.target.value}/>
                  <input type="text" id="glname" name="gender" defaultValue={this.updatedTeacherObject.gender} onChange={ e=> this.updatedTeacherObject.gender=e.target.value}/>
                  <div className="button-question">
                    <button className = "actions" onClick={ (e)=>{this.updateTeacher(e);this.props.isModalOpen()}}> edit </button>
                    <button className = "actions" onClick={this.props.isModalOpen}>close</button>
                  </div>
              </form>
          </div>
      </Modal>
      <Modal show={this.props.showModal==='second' } handleClose={()=>{this.props.isModalOpen(false)}}>

          <div className="modal-body">
              <p className = "warning">Are you sure you want to permanently delete it? </p>
              <div className="button-question">
                <button className = "actions" onClick={()=> {context.deleteTeacher(this.props.teachersArray[this.props.raw].id); context.getTeachers(); this.props.isModalOpen()}}>{"yeah, I don't care"}</button>
                <button className = "actions" onClick={this.props.isModalOpen}>nope</button>
              </div>
          </div>
      </Modal>

  </div>

    )
  }
}

function mapStateToProps(state) {
    return {
      teachersArray: state.getTeachersArray.teachersArray,
      showModal: state.isModalOpen.showModal,
      raw: state.getTeachersArray.raw
    };
}

export default connect(mapStateToProps, {logout, getTeachers, deleteTeacher, rawDetecor, addTeacher, updateTeacher, isModalOpen})(Teachers);
