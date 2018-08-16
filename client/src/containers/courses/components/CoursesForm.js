import React from 'react';
import "../../students/components/studentForm.css"
import Modal from '../../../components/modal.js';
import history from "../../../history";



class CoursesForm extends React.Component {
  componentDidUpdate(){
    if(this.props.newID && this.refs.name.value){
      this.props.deleteAddedId();
      history.push(`../courses/edit/${this.props.newID}`);
      }
  }
    render() {

    const {id, onSubmit} = this.props;
    let inputValues;
    if(id) {
      inputValues = this.props.objectToEdit;
    }
    else {
      inputValues = {

        name: null,
        startDate: null,
        endDate: null,
        teacherId: null,
        classId: null
      }
}


    return (
      <div className="main">
      <h1 className="head"> Courses </h1>
          <form className = "add-form">
                  <input ref = 'name' defaultValue={(inputValues) ? inputValues.name :  ''} type="text" id="afname" name="firstname"  placeholder="First name" onChange={ (e)=> {inputValues.name=e.target.value}} />
                  <input ref = 'startDate' defaultValue={(inputValues) ? inputValues.startDate :  ''} type="date" id="alname" name="lastname"  placeholder="Last name"  onChange={ e=> {inputValues.startDate=e.target.value}}/>
                  <input ref = 'endDate' defaultValue={(inputValues) ? inputValues.endDate :  ''} type="date" id="aemail" name="email"  placeholder="Email" onChange={ e=> {inputValues.endDate=e.target.value}}/>
                  <div className="select">
                            <select ref = 'selectClass' name="select"  onChange={(e)=> { inputValues.classId=e.target.value}} >
                            {<option value = '' default>  {(inputValues && inputValues.Classes ? `${inputValues.Classes.name}` : 'Choose a Class')} </option>}
                                { this.props.classesArray ? this.props.classesArray.map(item => {

                                    return (
                                        <option
                                        value={item.id}

                                        >
                                            {`${item.name}`}
                                        </option>
                                    );
                                }) : true}
                            </select>
                        </div>
                        <div className="select">
                                  <select ref = 'selectTeacher' name="select"  onChange={(e)=> { inputValues.teacherId=e.target.value}} >
                                  {<option value = '' default>  {(inputValues && inputValues.Teachers ? `${inputValues.Teachers.firstName} ${inputValues.Teachers.lastName}` : 'Choose a teacher')} </option>}
                                      {this.props.teachersArray ?  this.props.teachersArray.map(item => {

                                          return (
                                              <option
                                              value={item.id}

                                              >
                                                  {`${item.firstName} ${item.lastName}`}
                                              </option>
                                          );
                                      }) : true}
                                  </select>
                              </div>

                  {(this.props.id ?
      <div>
      <button className = 'edit-button' onClick={(e) => {e.preventDefault();  this.props.onSubmit(inputValues);}}>
        Save
      </button>
      <button className = 'edit-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(inputValues);history.push(`../../courses`)}}>
        Save and close
      </button>
      <button className = 'edit-button' onClick={() => {history.push('../../courses')}}>
        Close
      </button>
      </div>
    : <div>
    <button className = 'add-button' onClick={(e) => {
      e.preventDefault();
      this.refs.selectTeacher.value = null;
      this.refs.selectClass.value = null;
      this.refs.name.value = null;
      this.refs.startDate.value = null;
      this.refs.endDate.value = null;
      this.props.onSubmit(inputValues)}}>
    Add more
    </button>
        <button className = 'add-button' onClick={(e) => { e.preventDefault(); this.props.onSubmit(inputValues);}}>
          Add
        </button>
        <button className = 'edit-button' onClick={() => {history.push('../courses')}}>
          Close
        </button>
      </div>)}

              </form>
              </div>

)
  }
}



export default CoursesForm;
