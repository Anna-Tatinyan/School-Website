import React from "react";
import "../../students/components/studentForm.css";
import history from "../../../history";

class ClassesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameError: "",
      teacherIdError: ""
    };
  }

  componentDidUpdate() {
    if (this.props.newID && this.refs.nameInput.value) {
      this.props.deleteAddedId();
      history.push(`../classes/edit/${this.props.newID}`);
    }
  }
  validate(input) {
    !input.name
      ? this.setState({ nameError: "Name is required" })
      : this.setState({ nameError: "" });

    !input.teacherId
      ? this.setState({ teacherIdError: "Teacher is required" })
      : this.setState({ teacherIdError: "" });
  }
  render() {
    const { id } = this.props;
    let inputValues;
    if (id) {
      inputValues = this.props.objectToEdit;
    } else {
      inputValues = {
        name: null,
        teacherId: null
      };
    }
    const { nameError, teacherIdError } = this.state;
    return (
      <div className="main">
        <h1 className="head"> Classes </h1>
        <form className="add-form">
          <input
            ref="nameInput"
            defaultValue={inputValues ? inputValues.name : ""}
            type="text"
            id="afname"
            name="name"
            placeholder="Name"
            onChange={e => {
              inputValues.name = e.target.value;
            }}
          />
          <div className="error"> {nameError} </div>
          <div className="select">
            <select
              ref="selectInput"
              name="select"
              onChange={e => {
                inputValues.teacherId = e.target.value;
              }}
            >
              {
                <option value="" default>
                  {" "}
                  {inputValues && inputValues.Teacher
                    ? `${inputValues.Teacher.firstName} ${
                        inputValues.Teacher.lastName
                      }`
                    : "Choose a teacher"}{" "}
                </option>
              }
              {this.props.availableTeachersArray.map(item => {
                return (
                  <option value={item.id} key={item.id}>
                    {`${item.firstName} ${item.lastName}`}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="error"> {teacherIdError} </div>

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
                  history.push(`../../classes`);
                }}
              >
                Save and close
              </button>
              <button
                className="edit-button"
                onClick={() => {
                  history.push("../../classes");
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
                  this.refs.nameInput.value = null;
                  this.refs.selectInput.value = null;
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
                  history.push("../classes");
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

export default ClassesForm;
