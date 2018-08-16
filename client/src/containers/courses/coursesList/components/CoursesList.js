import React from 'react';
import "../../../../index.css"
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import  history  from '../../../../history';

import Modal from '../../../../components/modal.js'



class CoursesList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showModal: false,
      row: null
    }
    super(props);

    this.updatedCoursesObject = {
      name: null,
      startDate: null,
      endDate: null,
      classId: null,
      teacherId: null
    }
  }

    componentDidMount() {
       this.props.getCourses();
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


      <button className="blue" style={blueStyle} onClick={ () => history.push('/admin/courses/add')}>
      Add Courses</button>
  <table className="table" style={tableStyle}>
       <tr className = "header">
         <th>name</th>
         <th>classId</th>
         <th>teacherId</th>
         <th>startDate</th>
         <th>endDate</th>
         <th>options</th>
       </tr>
      { this.props.coursesArray.map((courseObject, index) => {  if(this.state.row === index){ this.updatedCoursesObject = this.props.coursesArray[index]} return(

          <tr>
                 <td>{courseObject.name}</td>
                 <td>{ !courseObject.Classes ? 'not available': courseObject.Classes.name}</td>
                 <td>{ !courseObject.Teachers ? 'not available': courseObject.Teachers.firstName + ' ' + courseObject.Teachers.lastName}</td>
                 <td>{courseObject.startDate}</td>
                 <td>{courseObject.endDate}</td>
                 <td>
                 <button className="btn" onClick={ ()=>{  this.setState({row: index, showModal: true}); }} > <i className="fa fa-trash"></i>
                 </button>
                 <button className="btn"  onClick={ () => history.push(`/admin/courses/edit/${courseObject.id}`)}><i className="fa fa-cog fa-spin"></i>
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
                <button className = "actions" onClick={()=> {this.props.deleteCourses(this.props.coursesArray[this.state.row].id); this.props.getCourses(); this.setState({showModal: false})}}>{"yup"}</button>
                <button className = "actions" onClick={()=>{this.setState({showModal: false})}}>nope</button>
              </div>
          </div>
      </Modal>

  </div>
    )
  }
}
export default CoursesList;
