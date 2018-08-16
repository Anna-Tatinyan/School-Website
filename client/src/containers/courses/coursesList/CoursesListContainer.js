import React from 'react';

import { connect } from 'react-redux';

import { getCourses, deleteCourses } from '../../../actions/';

import CoursesList from "./components/CoursesList.js"



class CoursesListContainer extends React.Component {
  render() {
    return (
      <CoursesList coursesArray = {this.props.coursesArray}  getCourses = {this.props.getCourses} deleteCourses = {this.props.deleteCourses}/>

    )
  }

}
function mapStateToProps(state) {

    return {
      coursesArray: state.getCoursesArray.coursesArray,

    };
}

export default connect(mapStateToProps, {getCourses, deleteCourses})(CoursesListContainer);
