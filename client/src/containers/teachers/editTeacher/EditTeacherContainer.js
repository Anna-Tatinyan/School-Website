import React from 'react';
import { connect } from 'react-redux';
import {  updateTeacher, getTeachers } from '../../../actions/';

import TeacherForm from '../components/TeacherForm'


class EditTeacherContainer extends React.Component {
  componentDidMount() {
    this.props.getTeachers();
  }
  render() {let objectToEdit = null;
    for(let i = 0; i<this.props.teachersArray.length; i++){
          if(this.props.teachersArray[i].id == this.props.match.params.id){
           objectToEdit = this.props.teachersArray[i]
          }
    }
    return (
      <TeacherForm  onSubmit = {this.props.updateTeacher} teachersArray = {this.props.teachersArray} objectToEdit = {objectToEdit} id = {this.props.match.params.id}/>

    )
  }
}
function mapStateToProps(state) {

    return {
      teachersArray: state.getTeachersArray.teachersArray,
    };
}

export default connect(mapStateToProps, { updateTeacher, getTeachers})(EditTeacherContainer);
