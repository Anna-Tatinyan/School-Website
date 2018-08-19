import React from "react";
import "../../students/components/studentForm.css";
import history from "../../../history";

class TeacherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameError: "",
      lastNameError: "",
      phoneError: "",
      emailError: ""
    };
  }
  validate(input) {
    !input.firstName
      ? this.setState({
          firstNameError: "Last name is required"
        })
      : this.setState({
          firstNameError: ""
        });
    !input.lastName
      ? this.setState({
          lastNameError: "First name is required"
        })
      : this.setState({
          lastNameError: ""
        });
    !input.phone
      ? this.setState({
          phoneError: "Phone is required"
        })
      : this.setState({
          phoneError: ""
        });
    !input.email
      ? this.setState({
          emailError: "Email is required"
        })
      : this.setState({
          emailError: ""
        });
  }
  componentDidUpdate() {
    if (this.props.newID && this.refs.firstName.value) {
      this.props.deleteAddedId();
      history.push(`../teachers/edit/${this.props.newID}`);
    }
  }
  render() {
    const {
      firstNameError,
      lastNameError,
      phoneError,
      emailError
    } = this.state;

    const { id } = this.props;

    let inputValues;
    if (id) {
      inputValues = this.props.objectToEdit;
    } else {
      inputValues = {
        firstName: null,
        lastName: null,
        phone: null,
        email: null
      };
    }
    return (
      <div className="main">
        <h1 className="head"> Teachers </h1>
        <form className="add-form">
          <input
            ref="firstName"
            defaultValue={inputValues ? inputValues.firstName : ""}
            type="text"
            id="afname"
            name="firstname"
            placeholder="First name"
            onChange={e => {
              inputValues.firstName = e.target.value;
            }}
          />{" "}
          <div className="error"> {firstNameError} </div>
          <input
            ref="lastName"
            defaultValue={inputValues ? inputValues.lastName : ""}
            type="text"
            id="alname"
            name="lastname"
            placeholder="Last name"
            onChange={e => {
              inputValues.lastName = e.target.value;
            }}
          />{" "}
          <div className="error"> {lastNameError} </div>
          <input
            ref="email"
            defaultValue={inputValues ? inputValues.email : ""}
            type="text"
            id="aemail"
            name="email"
            placeholder="Email"
            onChange={e => {
              inputValues.email = e.target.value;
            }}
          />{" "}
          <div className="error"> {emailError} </div>
          <input
            ref="phone"
            defaultValue={inputValues ? inputValues.phone : ""}
            type="text"
            id="plname"
            name="phone"
            placeholder="Phone"
            onChange={e => {
              inputValues.phone = e.target.value;
            }}
          />{" "}
          <div className="error"> {phoneError} </div>
          {this.props.id ? (
            <div>
              <button
                className="edit-button"
                onClick={e => {
                  e.preventDefault();
                  this.validate(inputValues);
                  this.props.onSubmit(inputValues);
                }}
              >
                Save{" "}
              </button>{" "}
              <button
                className="edit-button"
                onClick={e => {
                  e.preventDefault();
                  this.validate(inputValues);
                  this.props.onSubmit(inputValues);
                  history.push(`../../teachers`);
                }}
              >
                Save and close{" "}
              </button>{" "}
              <button
                className="edit-button"
                onClick={() => {
                  history.push("../../teachers");
                }}
              >
                Close{" "}
              </button>{" "}
            </div>
          ) : (
            <div>
              <button
                className="add-button"
                onClick={e => {
                  e.preventDefault();
                  this.validate(inputValues);
                  this.refs.firstName.value = null;
                  this.refs.lastName.value = null;
                  this.refs.email.value = null;
                  this.refs.phone.value = null;
                  this.props.onSubmit(inputValues, false);
                }}
              >
                Add more{" "}
              </button>{" "}
              <button
                className="add-button"
                onClick={e => {
                  e.preventDefault();
                  this.validate(inputValues);
                  this.props.onSubmit(inputValues, true);
                }}
              >
                Add{" "}
              </button>{" "}
              <button
                className="edit-button"
                onClick={() => {
                  history.push("../teachers");
                }}
              >
                Close{" "}
              </button>{" "}
            </div>
          )}
        </form>{" "}
      </div>
    );
  }
}

export default TeacherForm;
