import React from 'react';

import { connect } from 'react-redux';

import { getTeachers, deleteTeacher, deleteErrorMessage } from '../../../actions/';

import TeacherList from "./components/TeacherList.js"



class TeacherListContainer extends React.Component {
  render() {
    return (
      <TeacherList teachersArray = {this.props.teachersArray} deleteErrorMessage = {this.props.deleteErrorMessage} errorMessage = {this.props.errorMessage} getTeachers = {this.props.getTeachers} deleteTeacher = {this.props.deleteTeacher}/>

    )
  }

}
function mapStateToProps(state) {

    return {
      teachersArray: state.getTeachersArray.teachersArray,
      errorMessage: state.getTeachersArray.errorMessage,


    };
}

export default connect(mapStateToProps, {getTeachers, deleteTeacher, deleteErrorMessage})(TeacherListContainer);
