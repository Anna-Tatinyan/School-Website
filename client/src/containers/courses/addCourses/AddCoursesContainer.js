import React from 'react';

import { connect } from 'react-redux';
import { addCourses, deleteAddedId, getClasses, getTeachers, messageDelete} from '../../../actions/';

import CoursesForm from '../components/CoursesForm'



class AddCoursesContainer extends React.Component {
  componentDidMount(){
    this.props.getClasses();
    this.props.getTeachers();
  }

  render() {

    return (
      <CoursesForm   classesArray ={this.props.classesArray} messageDelete = {this.props.messageDelete} message = {this.props.message} teachersArray ={this.props.teachersArray} onSubmit = {this.props.addCourses}   deleteAddedId = {this.props.deleteAddedId} newID = {this.props.newID}/>

    )
  }
}
const mapStateToProps = (state) => {
  return ({
    teachersArray: state.getTeachersArray.teachersArray,
    classesArray: state.getClassesArray.classesArray,
    newID: state.onSubmitReducer.newID,
    message: state.getCoursesArray.errorMessage
  })
}


export default connect(mapStateToProps, {addCourses, getClasses, messageDelete, getTeachers, deleteAddedId})(AddCoursesContainer);
