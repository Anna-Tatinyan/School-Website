import React from 'react';

import { connect } from 'react-redux';

import { getClasses, deleteClasses  } from '../../../actions/';

import ClassesList from "./components/ClassesList"



class ClassesListContainer extends React.Component {
  render() {

    return (
      <ClassesList classesArray = {this.props.classesArray}getClasses = {this.props.getClasses} deleteClasses = {this.props.deleteClasses}/>

    )
  }

}
function mapStateToProps(state) {

    return {
      classesArray: state.getClassesArray.classesArray,

    };
}

export default connect(mapStateToProps, {getClasses, deleteClasses})(ClassesListContainer);
