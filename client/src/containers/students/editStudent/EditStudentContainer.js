import React from 'react';
import { connect } from 'react-redux';
import {  updateStudent, getStudents } from '../../../actions/';

import StudentForm from '../components/StudentForm'


class EditStudentContainer extends React.Component {

  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    let objectToEdit = null;
    for(let i = 0; i<this.props.studentsArray.length; i++){
          if(this.props.studentsArray[i].id == this.props.match.params.id){
           objectToEdit = this.props.studentsArray[i]
          }
    }
    return (
      <StudentForm  classesArray = {this.props.classesArray} objectToEdit = {objectToEdit} onSubmit = {this.props.updateStudent}  id = {this.props.match.params.id}/>

    )
  }
}

const mapStateToProps = (state) => {
  return ({

      classesArray: state.getClassesArray.classesArray,

    studentsArray: state.getStudentsArray.studentsArray
  })
}

export default connect(mapStateToProps, { updateStudent, getStudents})(EditStudentContainer);
