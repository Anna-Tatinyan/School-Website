import React from 'react';
import { connect } from 'react-redux';
import {  updateClasses, getClasses,  getAvailableTeachers} from '../../../actions/';

import ClassesForm from '../components/ClassesForm'


class EditClassesContainer extends React.Component {
  componentDidMount() {
    this.props.getClasses();
    this.props.getAvailableTeachers();
  }
  render() {
    let objectToEdit = null;
    for(let i = 0; i<this.props.classesArray.length; i++){
          if(this.props.classesArray[i].id == this.props.match.params.id){
           objectToEdit = this.props.classesArray[i]
          }
    }
    return (
      <ClassesForm  objectToEdit = {objectToEdit} availableTeachersArray = {this.props.availableTeachersArray} onSubmit = {this.props.updateClasses} id = {this.props.match.params.id}/>

    )
  }
}
function mapStateToProps(state) {

    return {
      availableTeachersArray: state.getAvailableTeachers.availableTeachersArray,
      classesArray: state.getClassesArray.classesArray
    };
}

export default connect(mapStateToProps, { updateClasses, getClasses, getAvailableTeachers})(EditClassesContainer);
