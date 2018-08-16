import React from 'react';
import "../../../../index.css"
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import  history  from '../../../../history';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import {user} from 'react-icons-kit/ikons/user';
import {book} from 'react-icons-kit/oct/book';
import {university} from 'react-icons-kit/ionicons/university';
import {home} from 'react-icons-kit/iconic/home';
import {iosTrash} from 'react-icons-kit/ionicons/iosTrash'

import Modal from '../../../../components/modal.js'



class TeachersList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showModal: false,
      row: null
    }
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
    const tableStyle = {
      margin: " 10% 10px 0 58px",
    }
    const blueStyle = {
        margin: "50px -14% 0 20%",
    }

    return (
      <div className="main">


      <button className="blue" style={blueStyle} onClick={ () => history.push('/admin/teachers/add')}>
      Add Teacher</button>
  <table className="table" style={tableStyle}>
       <tr className = "header">
         <th>firstname</th>
         <th>lastname</th>
         <th>phone</th>
         <th>email</th>
         <th>options</th>
       </tr>
      { this.props.teachersArray.map((teacherObject, index) => {  if(this.state.row === index){ this.updatedTeacherObject = this.props.teachersArray[index]} return(

          <tr>
                 <td>{teacherObject.firstName}</td>
                 <td>{teacherObject.lastName}</td>
                 <td>{teacherObject.phone}</td>
                  <td>{teacherObject.email}</td>
                 <td>
                 <button className="btn" onClick={ ()=>{  this.setState({row: index, showModal: true}); }} > <i className="fa fa-trash"></i>
                 </button>
                 <button className="btn"  onClick={ () => history.push(`/admin/teachers/edit/${teacherObject.id}`)}><i className="fa fa-cog fa-spin"></i>
                 </button>
                 </td>
             </tr>

        )})
    }
      </table>


      <Modal show={this.state.showModal}>

          <div className="modal-body">
              <p className = "warning">Are you sure you want to permanently delete it? </p>
              <div className="button-question">
                <button className = "actions" onClick={()=> {this.props.deleteTeacher(this.props.teachersArray[this.state.row].id); this.props.getTeachers(); this.setState({showModal: false})}}>{"yup"}</button>
                <button className = "actions" onClick={()=>{this.setState({showModal: false})}}>nope</button>
              </div>
          </div>
      </Modal>

  </div>
    )
  }
}
export default TeachersList;
