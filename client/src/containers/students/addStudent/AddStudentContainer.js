import React from 'react';
import { connect } from 'react-redux';
import {  addStudent, deleteAddedId, getClasses } from '../../../actions/';

import StudentForm from '../components/StudentForm'



class AddStudentContainer extends React.Component {
  componentDidMount(){
    this.props.getClasses();
  }

  render() {
    return (
      <StudentForm  onSubmit = {this.props.addStudent}  classesArray ={this.props.classesArray}  deleteAddedId = {this.props.deleteAddedId} newID = {this.props.newID}/>

    )
  }
}

const mapStateToProps = (state) => {
  return ({
    classesArray: state.getClassesArray.classesArray,
    newID: state.onSubmitReducer.newID
  })
}



export default connect(mapStateToProps, {getClasses, addStudent, deleteAddedId})(AddStudentContainer);
