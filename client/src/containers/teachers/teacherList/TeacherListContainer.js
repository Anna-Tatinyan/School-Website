import React from 'react';

import { connect } from 'react-redux';

import { getTeachers, deleteTeacher } from '../../../actions/';

import TeacherList from "./components/TeacherList.js"



class TeacherListContainer extends React.Component {
  render() {
    return (
      <TeacherList teachersArray = {this.props.teachersArray}  getTeachers = {this.props.getTeachers} deleteTeacher = {this.props.deleteTeacher}/>

    )
  }

}
function mapStateToProps(state) {

    return {
      teachersArray: state.getTeachersArray.teachersArray,

    };
}

export default connect(mapStateToProps, {getTeachers, deleteTeacher})(TeacherListContainer);
