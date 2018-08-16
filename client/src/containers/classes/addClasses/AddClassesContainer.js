import React from 'react';
import {
  connect
} from 'react-redux';
import {
  deleteAddedId,
  addClasses,
  getAvailableTeachers,
  getClasses
} from '../../../actions';


import ClassesForm from '../components/ClassesForm'



class AddClassesContainer extends React.Component {

  componentDidMount() {
    this.props.getClasses();
    this.props.getAvailableTeachers();
  }
  render() {
    return ( <
      ClassesForm onSubmit = {
        this.props.addClasses
      }
      availableTeachersArray = {
        this.props.availableTeachersArray
      }
      deleteAddedId = {
        this.props.deleteAddedId
      }
      newID = {
        this.props.newID
      }
      />

    )
  }
}

function mapStateToProps(state) {
  return {
    availableTeachersArray: state.getAvailableTeachers.availableTeachersArray,
    newID: state.onSubmitReducer.newID
  };
}
export default connect(mapStateToProps, {
  deleteAddedId,
  addClasses,
  getAvailableTeachers,
  getClasses
})(AddClassesContainer);
