import React from 'react';

import { connect } from 'react-redux';
import { addTeacher, deleteAddedId } from '../../../actions/';

import TeacherForm from '../components/TeacherForm'



class AddTeacherContainer extends React.Component {
  render() {

    return (
      <TeacherForm  onSubmit = {this.props.addTeacher} teachersArray = {this.props.teachersArray}  deleteAddedId = {this.props.deleteAddedId} newID = {this.props.newID}/>

    )
  }
}
const mapStateToProps = (state) => {
  return ({
    teachersArray: state.getTeachersArray.teachersArray,
    newID: state.onSubmitReducer.newID
  })
}


export default connect(mapStateToProps, {addTeacher, deleteAddedId})(AddTeacherContainer);
