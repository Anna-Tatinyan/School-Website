import React from 'react';

import { connect } from 'react-redux';

import {  getStudents, deleteStudent  } from '../../../actions/';

import StudentsList from "./components/StudentsList"



class StudentListContainer extends React.Component {
  render() {
    return (
      <StudentsList studentsArray = {this.props.studentsArray}  getStudents = {this.props.getStudents} deleteStudent = {this.props.deleteStudent}/>

    )
  }

}
function mapStateToProps(state) {

    return {
      studentsArray: state.getStudentsArray.studentsArray,

    };
}

export default connect(mapStateToProps, { getStudents, deleteStudent})(StudentListContainer);
