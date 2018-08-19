import React from "react";
import "./studentForm.css";

import history from "../../../history";

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameError: "",
      lastNameError: "",
      ageError: "",
      genderError: "",
      phoneError: "",
      emailError: "",
      classIdError: ""
    };
  }
  componentDidUpdate() {
    if (this.props.newID && this.refs.firstName.value) {
      this.props.deleteAddedId();
      history.push(`../students/edit/${this.props.newID}`);
    }
  }
  validate(input) {
    !input.firstName
      ? this.setState({ firstNameError: "Last name is required" })
      : this.setState({ firstNameError: "" });
    !input.lastName
      ? this.setState({ lastNameError: "First name is required" })
      : this.setState({ lastNameError: "" });

    !input.age
      ? this.setState({ ageError: "Age is required" })
      : this.setState({ ageError: "" });

    !input.gender
      ? this.setState({ genderError: "Gender is required" })
      : this.setState({ genderError: "" });
    !input.phone
      ? this.setState({ phoneError: "Phone is required" })
      : this.setState({ phoneError: "" });
    !input.email
      ? this.setState({ emailError: "Email is required" })
      : this.setState({ emailError: "" });

    !input.classId
      ? this.setState({ classIdError: "Class is required" })
      : this.setState({ classIdError: "" });
  }
  render() {
    const { id } = this.props;
    let inputValues;
    if (id) {
      inputValues = this.props.objectToEdit;
    } else {
      inputValues = {
        firstName: null,
        lastName: null,
        age: null,
        gender: null,
        phone: null,
        email: null,
        classId: null
      };
    }

    const {
      firstNameError,
      lastNameError,
      ageError,
      genderError,
      phoneError,
      emailError,
      classIdError
    } = this.state;
    return (
      <div className="main">
        <h1 className="head"> Students </h1>
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
          />
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
          />
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
          />
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
          />
          <div className="error"> {phoneError} </div>

          <input
            ref="age"
            defaultValue={inputValues ? inputValues.age : ""}
            type="text"
            id="alname"
            name="age"
            placeholder="Age"
            onChange={e => {
              inputValues.age = e.target.value;
            }}
          />
          <div className="error"> {ageError} </div>

          <input
            ref="gender"
            defaultValue={inputValues ? inputValues.gender : ""}
            type="text"
            id="glname"
            name="gender"
            placeholder="Gender"
            onChange={e => {
              inputValues.gender = e.target.value;
            }}
          />
          <div className="error"> {genderError} </div>

          <div className="select">
            <select
              ref="input"
              name="select"
              onChange={e => {
                inputValues.classId = e.target.value;
              }}
            >
              {
                <option value="" default>
                  {" "}
                  {inputValues && inputValues.Class
                    ? `${inputValues.Class.name}`
                    : "Choose a class"}{" "}
                </option>
              }
              {this.props.classesArray.map((item, index) => {
                return (
                  <option key={item.id} value={item.id}>
                    {`${item.name}`}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="error"> {classIdError} </div>

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
                Save
              </button>
              <button
                className="edit-button"
                onClick={e => {
                  e.preventDefault();
                  this.validate(inputValues);
                  this.props.onSubmit(inputValues);
                  history.push(`../../students`);
                }}
              >
                Save and close
              </button>
              <button
                className="edit-button"
                onClick={() => {
                  history.push("../../students");
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <div>
              <button
                className="add-button"
                onClick={e => {
                  e.preventDefault();
                  this.validate(inputValues);
                  this.refs.input.value = null;
                  this.refs.firstName.value = null;
                  this.refs.lastName.value = null;
                  this.refs.email.value = null;
                  this.refs.gender.value = null;
                  this.refs.age.value = null;
                  this.refs.phone.value = null;
                  this.props.onSubmit(inputValues, false);
                }}
              >
                Add more
              </button>
              <button
                className="add-button"
                onClick={e => {
                  e.preventDefault();
                  this.validate(inputValues);
                  this.props.onSubmit(inputValues, true);
                }}
              >
                Add
              </button>
              <button
                className="edit-button"
                onClick={() => {
                  history.push("../students");
                }}
              >
                Close
              </button>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default StudentForm;
