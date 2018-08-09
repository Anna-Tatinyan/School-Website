import React from 'react';
import "./students.css"
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import  history  from '../../history';
import { logout, getStudents, isModalOpen, rowDetector, deleteStudent, addStudent, updateStudent  } from '../../actions/';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import {user} from 'react-icons-kit/ikons/user';
import {book} from 'react-icons-kit/oct/book';
import {university} from 'react-icons-kit/ionicons/university';
import {home} from 'react-icons-kit/iconic/home';
import Modal from '../modal.js'



class Students extends React.Component {
  constructor(props){
    super(props);

    this.updatedStudentObject = {
      firstName: null,
      lastName: null,
      age: null,
      gender: null,
      phone: null,
      email: null
    }
  }

  addStudent = (e) => {
        const firstName = this.addFirstName.value;
        const lastName = this.addlastName.value;
        const age = this.addAge.value
        const gender = this.addGender.value;
        const phone = this.addPhone.value;
        const email = this.addEmail.value;

        this.props.addStudent(firstName,lastName,age,gender,phone,email);
        this.props.getStudents();
    };



  updateStudent = (e) => {
        this.props.updateStudent(this.updatedStudentObject)
        this.props.getStudents();
    };

    componentDidMount() {
       this.props.getStudents();
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
      <h1 className="head"> Students </h1>
      <div style={styles}>
          <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' selected='students' onItemSelection={ (id, parent)=> {history.push(`../admin/${id}`)}}>
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
          <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Student</button>
          <div className="modal fade" id="myModal" role="dialog">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                          <h4 className="modal-title">Add a new Student</h4>
                      </div>
                      <div className="modal-body">
                          <form  onSubmit={this.addStudent}>
                              <input type="text" id="afname" name="firstname" placeholder="First name.." ref={(input) => this.addFirstName = input}/>
                              <input type="text" id="alname" name="lastname" placeholder="Last name.." ref={(input) => this.addlastName = input}/>
                              <input type="text" id="aemail" name="email" placeholder="Email.." ref={(input) => this.addEmail = input}/>
                              <input type="text" id="plname" name="phone" placeholder="Phone.." ref={(input) => this.addPhone = input}/>
                              <input type="text" id="alname" name="age" placeholder="Age.." ref={(input) => this.addAge = input}/>
                              <input type="text" id="glname" name="gender" placeholder="Gender.." ref={(input) => this.addGender = input}/>
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


      <button type="button" className="btn btn-default" onClick={this.props.logout}>
          <span className="glyphicon glyphicon-log-out"></span>Logout</button>
      <table className="students">
      <tr className = "header">
         <th>firstname</th>
         <th>lastname</th>
         <th>gender</th>
         <th>phone</th>
         <th>email</th>
         <th>age</th>
         <th>options</th>
       </tr>
      { this.props.studentsArray.map((studentsObject, index) => {  if(this.props.row === index){ this.updatedStudentObject = this.props.studentsArray[index]} return(

          <tr>
                 <td>{studentsObject.firstName}</td>
                 <td>{studentsObject.lastName}</td>
                 <td>{studentsObject.gender}</td>
                  <td>{studentsObject.phone}</td>
                  <td>{studentsObject.email}</td>
                  <td>{studentsObject.age}</td>
                 <td>
                 <button className="white" onClick={ ()=>{ context.rowDetector(index); context.isModalOpen('second'); }}> Delete
                 </button>
                 <button className="gray" onClick={ ()=> { context.rowDetector(index); context.isModalOpen('first'); }}> Edit
                 </button>
                 </td>
             </tr>
        )})
    }
      </table>
      <Modal show={this.props.showModal==='first' } handleClose={()=>{this.props.isModalOpen()}}>
          <div className="modal-body">
              <form>
                  <input type="text" id="afname" name="firstname" defaultValue={this.updatedStudentObject.firstName} onChange={ e=> {this.updatedStudentObject.firstName=e.target.value;}} />
                  <input type="text" id="alname" name="lastname" defaultValue={this.updatedStudentObject.lastName} onChange={ e=> this.updatedStudentObject.lastName=e.target.value}/>
                  <input type="text" id="aemail" name="email" defaultValue={this.updatedStudentObject.email} onChange={ e=> this.updatedStudentObject.lastName=e.target.value}/>
                  <input type="text" id="plname" name="phone" defaultValue={this.updatedStudentObject.phone} onChange={ e=> this.updatedStudentObject.phone=e.target.value}/>
                  <input type="text" id="alname" name="age" defaultValue={this.updatedStudentObject.age} onChange={ e=> this.updatedStudentObject.age=e.target.value}/>
                  <input type="text" id="glname" name="gender" defaultValue={this.updatedStudentObject.gender} onChange={ e=> this.updatedStudentObject.gender=e.target.value}/>
                  <div className="button-question">
                    <button className = "actions" onClick={ (e)=>{this.updateStudent(e);this.props.isModalOpen()}}> edit </button>
                    <button className = "actions" onClick={this.props.isModalOpen}>close</button>
                  </div>
              </form>
          </div>
      </Modal>
      <Modal show={this.props.showModal==='second' } handleClose={()=>{this.props.isModalOpen(false)}}>

          <div className="modal-body">
              <p className = "warning">Are you sure you want to permanently delete it? </p>
              <div className="button-question">
                <button className = "actions" onClick={()=> {context.deleteStudent(this.props.studentsArray[this.props.row].id); context.getStudents(); this.props.isModalOpen()}}>{"yeah, I don't care"}</button>
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
      studentsArray: state.getStudentsArray.studentsArray,
      showModal: state.isModalOpen.showModal,
      row: state.rowDetector.row
    };
}

export default connect(mapStateToProps, {logout, rowDetector, getStudents, deleteStudent, isModalOpen, addStudent, updateStudent})(Students);
