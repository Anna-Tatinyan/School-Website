import React from 'react';
import "../../students/components/studentForm.css"
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import {user} from 'react-icons-kit/ikons/user';
import {book} from 'react-icons-kit/oct/book';
import {university} from 'react-icons-kit/ionicons/university';
import {home} from 'react-icons-kit/iconic/home';
import Modal from '../../../components/modal.js';
import history from "../../../history";



class ClassesForm extends React.Component {

  componentDidUpdate(){
    if(this.props.newID && this.refs.nameInput.value ){

      this.props.deleteAddedId();
      history.push(`../classes/edit/${this.props.newID}`);
      }
  }
    render() {
      const styles = {
          width: '180px',
          height: '100%',
          background: '#2c3e50',
          color: '#FFF',
          position: 'fixed',
      };
    const {id, classesArray, onSubmit} = this.props;
    let inputValues;
    if(id) {
      inputValues = this.props.objectToEdit;
  }
    else {
      inputValues = {

        name: null,
        teacherId: null
      }
}
    return (
      <div className="main">
      <h1 className="head"> Classes </h1>




              <form className = "add-form">
                  <input ref = 'nameInput' defaultValue={(inputValues) ? inputValues.name :  ''} type="text" id="afname" name="name"  placeholder="Name" onChange={ (e)=> {inputValues.name=e.target.value}} />
                  <div className="select">
                            <select ref = 'selectInput' name="select"  onChange={(e)=> { inputValues.teacherId=e.target.value}} >
                                {<option value = '' default>  {(inputValues && inputValues.Teacher ? `${inputValues.Teacher.firstName} ${inputValues.Teacher.lastName}` : 'Choose a teacher')} </option>}
                                {this.props.availableTeachersArray.map(item => {

                                    return (
                                        <option
                                        value={item.id}

                                        >
                                            {`${item.firstName} ${item.lastName}`}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                          {(this.props.id ?
                        <div>
                        <button className = 'edit-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(inputValues);}}>
                        Save
                        </button>
                        <button className = 'edit-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(inputValues);history.push(`../../classes`)}}>
                        Save and close
                        </button>
                        <button className = 'edit-button' onClick={() => {history.push('../../classes')}}>
                        Close
                        </button>
                        </div>
                        : <div>
                        <button className = 'add-button' onClick={(e) => {e.preventDefault(); this.refs.nameInput.value = null; this.refs.selectInput.value = null; this.props.onSubmit(inputValues)}}>
                        Add more
                        </button>
                        <button className = 'add-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(inputValues)}}>
                        Add
                        </button>
                        <button className = 'edit-button' onClick={() => {history.push('../classes')}}>
                        Close
                        </button>

                        </div>)}


              </form>
              </div>
    )
  }
}



export default ClassesForm;
