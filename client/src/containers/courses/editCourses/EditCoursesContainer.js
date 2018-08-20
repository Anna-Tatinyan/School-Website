import React from 'react';
import { connect } from 'react-redux';
import {  updateCourses, getCourses, getClasses, getTeachers, messageDelete  } from '../../../actions/';

import CoursesForm from '../components/CoursesForm'


class EditCoursesContainer extends React.Component {
  componentDidMount() {
    this.props.getClasses();
    this.props.getTeachers();
    this.props.getCourses();
  }
  render() {
    let objectToEdit = {};
    if(this.props.coursesArray) {
      for(let i = 0; i<this.props.coursesArray.length; i++){
            if(this.props.coursesArray[i].id == this.props.match.params.id){
             objectToEdit = this.props.coursesArray[i]
            }
      }
    }
    return (
      <CoursesForm  onSubmit = {this.props.updateCourses} classesArray ={this.props.classesArray} messageDelete = {this.props.messageDelete} message = {this.props.message} teachersArray ={this.props.teachersArray} objectToEdit = {objectToEdit} id = {this.props.match.params.id}/>

    )
  }
}
function mapStateToProps(state) {

    return {
      coursesArray: state.getCoursesArray.coursesArray,
      teachersArray: state.getTeachersArray.teachersArray,
      classesArray: state.getClassesArray.classesArray,
      message: state.getCoursesArray.errorMessage
    };
}

export default connect(mapStateToProps, { getClasses, getTeachers, messageDelete, updateCourses, getCourses})(EditCoursesContainer);
