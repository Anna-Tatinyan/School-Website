import React from 'react';
import "./studentForm.css"
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import {user} from 'react-icons-kit/ikons/user';
import {book} from 'react-icons-kit/oct/book';
import {university} from 'react-icons-kit/ionicons/university';
import {home} from 'react-icons-kit/iconic/home';
import Modal from '../../../components/modal.js';
import history from "../../../history";



class StudentForm extends React.Component {
  componentDidUpdate(){
    if(this.props.newID && this.refs.firstName.value){
      this.props.deleteAddedId();
      history.push(`../students/edit/${this.props.newID}`);
      }
  }
    render() {

    const {id, studentsArray, onSubmit} = this.props;
    let inputValues;
    if(id) {
      inputValues = this.props.objectToEdit;
    }
    else {
      inputValues = {

        firstName: null,
        lastName: null,
        age: null,
        gender: null,
        phone: null,
        email: null,
        classId: null
      }
}


    return (
      <div className="main">
      <h1 className="head"> Students </h1>
          <form className = "add-form">
                  <input ref = 'firstName' defaultValue={(inputValues) ? inputValues.firstName :  ''} type="text" id="afname" name="firstname"  placeholder="First name" onChange={ (e)=> {inputValues.firstName=e.target.value}} />
                  <input ref = 'lastName' defaultValue={(inputValues) ? inputValues.lastName :  ''} type="text" id="alname" name="lastname"  placeholder="Last name"  onChange={ e=> {inputValues.lastName=e.target.value}}/>
                  <input ref = 'email' defaultValue={(inputValues) ? inputValues.email :  ''} type="text" id="aemail" name="email"  placeholder="Email" onChange={ e=> {inputValues.email=e.target.value}}/>
                  <input ref = 'phone' defaultValue={(inputValues) ? inputValues.phone :  ''} type="text" id="plname" name="phone"  placeholder="Phone" onChange={ e=> {inputValues.phone=e.target.value}}/>
                  <input ref = 'age' defaultValue={(inputValues) ? inputValues.age :  ''} type="text" id="alname" name="age"  placeholder="Age" onChange={ e=> {inputValues.age=e.target.value}}/>
                  <input ref = 'gender' defaultValue={(inputValues) ? inputValues.gender :  ''} type="text" id="glname" name="gender"  placeholder="Gender" onChange={ e=> {inputValues.gender=e.target.value}}/>
                  <div className="select">
                            <select ref = 'input' name="select"  onChange={(e)=> { inputValues.classId=e.target.value}} >
                            {<option value = '' default>  {(inputValues && inputValues.Class ? `${inputValues.Class.name}` : 'Choose a teacher')} </option>}
                                {this.props.classesArray.map(item => {

                                    return (
                                        <option
                                        value={item.id}

                                        >
                                            {`${item.name}`}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>

                  {(this.props.id ?
      <div>
      <button className = 'edit-button' onClick={(e) => {e.preventDefault();  this.props.onSubmit(inputValues);}}>
        Save
      </button>
      <button className = 'edit-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(inputValues);history.push(`../../students`)}}>
        Save and close
      </button>
      <button className = 'edit-button' onClick={() => {history.push('../../students')}}>
        Close
      </button>
      </div>
    : <div>
    <button className = 'add-button' onClick={(e) => {
      e.preventDefault();
      this.refs.input.value = null;
      this.refs.firstName.value = null;
      this.refs.lastName.value = null;
      this.refs.email.value = null;
      this.refs.gender.value = null;
      this.refs.age.value = null;
      this.refs.phone.value = null;
      this.props.onSubmit(inputValues)}}>
    Add more
    </button>
        <button className = 'add-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(inputValues);}}>
          Add
        </button>
        <button className = 'edit-button' onClick={() => {history.push('../students')}}>
          Close
        </button>
      </div>)}

              </form>
              </div>

)
  }
}



export default StudentForm;
