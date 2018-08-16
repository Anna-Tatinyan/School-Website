import React from 'react';
import "../../students/components/studentForm.css"
import Modal from '../../../components/modal.js';
import history from "../../../history";



class TeacherForm extends React.Component {
  componentDidUpdate(){
    if(this.props.newID && this.refs.firstName.value){
      this.props.deleteAddedId();
      history.push(`../teachers/edit/${this.props.newID}`);
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
    const {id, teachersArray, action} = this.props;

    let inputValues;
    if(id) {
      inputValues = this.props.objectToEdit;
    }
    else {
      inputValues = {

        firstName: null,
        lastName: null,
        phone: null,
        email: null
      }
}
    return (
      <div className="main">
      <h1 className="head"> Teachers </h1>

              <form className = "add-form">
                  <input ref = "firstName" defaultValue={(inputValues) ? inputValues.firstName :  ''} type="text" id="afname" name="firstname"  placeholder="First name" onChange={ (e)=> {inputValues.firstName=e.target.value}} />
                  <input ref = "lastName" defaultValue={(inputValues) ? inputValues.lastName :  ''} type="text" id="alname" name="lastname"  placeholder="Last name"  onChange={ e=> {inputValues.lastName=e.target.value}}/>
                  <input ref = "email" defaultValue={(inputValues) ? inputValues.email :  ''} type="text" id="aemail" name="email"  placeholder="Email" onChange={ e=> {inputValues.email=e.target.value}}/>
                  <input ref = "phone" defaultValue={(inputValues) ? inputValues.phone :  ''} type="text" id="plname" name="phone"  placeholder="Phone" onChange={ e=> {inputValues.phone=e.target.value}}/>


                  {(this.props.id ?
      <div>
      <button className = 'edit-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(inputValues);}}>
        Save
      </button>
      <button className = 'edit-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(inputValues);history.push(`../../teachers`)}}>
        Save and close
      </button>
      <button className = 'edit-button' onClick={() => {history.push('../../teachers')}}>
        Close
      </button>
      </div>
    : <div>
    <button className = 'add-button' onClick={(e) => {
      e.preventDefault();
      this.refs.firstName.value = null;
      this.refs.lastName.value = null;
      this.refs.email.value = null;
      this.refs.phone.value = null;
      this.props.onSubmit(inputValues)}}>
    Add more
    </button>
        <button className = 'add-button' onClick={(e) => {e.preventDefault(); this.props.onSubmit(inputValues);}}>
          Add
        </button>
        <button className = 'edit-button' onClick={() => {history.push('../teachers')}}>
          Close
        </button>
      </div>)}

              </form>
              </div>
    )
  }
}



export default TeacherForm;
