import React from 'react';

import { connect } from 'react-redux';
import { addCourses, deleteAddedId, getClasses, getTeachers } from '../../../actions/';

import CoursesForm from '../components/CoursesForm'



class AddCoursesContainer extends React.Component {
  componentDidMount(){
    this.props.getClasses();
    this.props.getTeachers();
  }

  render() {

    return (
      <CoursesForm   classesArray ={this.props.classesArray} teachersArray ={this.props.teachersArray} onSubmit = {this.props.addCourses}   deleteAddedId = {this.props.deleteAddedId} newID = {this.props.newID}/>

    )
  }
}
const mapStateToProps = (state) => {
  return ({
    teachersArray: state.getTeachersArray.teachersArray,
    classesArray: state.getClassesArray.classesArray,
    newID: state.onSubmitReducer.newID
  })
}


export default connect(mapStateToProps, {addCourses, getClasses, getTeachers, deleteAddedId})(AddCoursesContainer);
