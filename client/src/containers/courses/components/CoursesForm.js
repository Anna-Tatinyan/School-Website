import React from "react";
import "../../students/components/studentForm.css";
import history from "../../../history";

class CoursesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameError: "",
      dateError: "",
      teacherIdError: "",
      classIdError: "",
      timeError: "",
      weekDayError: "",
      week: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    };
  }
  componentDidUpdate() {
    if (this.props.newID && this.refs.name.value) {
      this.props.deleteAddedId();
      history.push(`../courses/edit/${this.props.newID}`);
    }
  }
  validate(input) {
    !input.name
      ? this.setState({ nameError: "Name is required" })
      : this.setState({ nameError: "" });
    !input.endDate && !input.startDate
      ? this.setState({ dateError: "Date is required" })
      : this.setState({ dateError: "" });

    !input.time[0].endTime && !input.time[0].startTime
      ? this.setState({ ageError: "Time is required" })
      : this.setState({ timeError: "" });

    !input.classId
      ? this.setState({ classIdError: "Class is required" })
      : this.setState({ classIdError: "" });
    !input.teacherId
      ? this.setState({ teacherIdError: "Teacher is required" })
      : this.setState({ teacherIdError: "" });
    !input.time[0].weekDay
      ? this.setState({ weekDayError: "Week day is required" })
      : this.setState({ weekDayError: "" });
  }
  render() {
    const {
      nameError,
      dateError,
      timeError,
      teacherIdError,
      classIdError,
      weekDayError
    } = this.state;

    const { id } = this.props;
    let inputValues = {};
    if (id) {
      inputValues = this.props.objectToEdit;
      if (!inputValues.time) {
        console.log(inputValues)
        inputValues.time = [{


        }];
      }
    } else {
      inputValues = {
        name: null,
        startDate: null,
        endDate: null,
        teacherId: null,
        classId: null,
        time: [{}]
      };
    }
    if(!inputValues.time[0]){
      inputValues.time[0] = {}
    }
    return (
      <div className="main">
        <h1 className="head"> Courses </h1>
        <form className="add-form">
          <input
            ref="name"
            defaultValue={inputValues ? inputValues.name : ""}
            type="text"
            id="afname"
            name="firstname"
            placeholder="First name"
            onChange={e => {
              inputValues.name = e.target.value;
            }}
          />
          <div className="error"> {nameError} </div>
          <input
            ref="startDate"
            defaultValue={inputValues ? inputValues.startDate : ""}
            type="date"
            id="alname"
            name="lastname"
            placeholder="Last name"
            onChange={e => {
              inputValues.startDate = e.target.value;
            }}
          />
          <input
            ref="endDate"
            defaultValue={inputValues ? inputValues.endDate : ""}
            type="date"
            id="aemail"
            name="email"
            placeholder="Email"
            onChange={e => {
              inputValues.endDate = e.target.value;
            }}
          />
          <div className="error"> {dateError} </div>
          <input
            ref="startTime"
            defaultValue={
              inputValues && inputValues.time[0]
                ? inputValues.time[0].startTime
                : ""
            }
            type="time"
            id="time"
            name="time"
            onChange={e => {
              console.log(inputValues);
              inputValues.time[0].startTime = e.target.value;
            }}
          />
          <input
            ref="endTime"
            defaultValue={
              inputValues && inputValues.time[0]
                ? inputValues.time[0].endTime
                : ""
            }
            type="time"
            id="time"
            name="time"
            onChange={e => {
              inputValues.time[0].endTime = e.target.value;
            }}
          />
          <div className="error"> {timeError} </div>

          <div className="select">
            <select
              ref="selectClass"
              name="select"
              onChange={e => {
                inputValues.classId = e.target.value;
              }}
            >
              {
                <option value="" default>
                  {" "}
                  {inputValues && inputValues.Classes
                    ? `${inputValues.Classes.name}`
                    : "Choose a Class"}{" "}
                </option>
              }
              {this.props.classesArray
                ? this.props.classesArray.map(item => {
                    return (
                      <option value={item.id} key={item.id}>
                        {`${item.name}`}
                      </option>
                    );
                  })
                : true}
            </select>
          </div>
          <div className="error"> {classIdError} </div>

          <div className="select">
            <select
              ref="selectTeacher"
              name="select"
              onChange={e => {
                inputValues.teacherId = e.target.value;
              }}
            >
              {
                <option value="" default>
                  {" "}
                  {inputValues && inputValues.Teachers
                    ? `${inputValues.Teachers.firstName} ${
                        inputValues.Teachers.lastName
                      }`
                    : "Choose a teacher"}{" "}
                </option>
              }
              {this.props.teachersArray
                ? this.props.teachersArray.map(item => {
                    return (
                      <option value={item.id} key={item.id}>
                        {`${item.firstName} ${item.lastName}`}
                      </option>
                    );
                  })
                : true}
            </select>
          </div>
          <div className="error"> {teacherIdError} </div>

          <select
            ref="week"
            name="select"
            onChange={e => {
              inputValues.time[0].weekDay = e.target.value;
            }}
          >
            {
              <option value="" default>

                {inputValues && inputValues.time[0].weekDay
                  ? `${inputValues.time[0].weekDay}`
                  : "Choose a weekDay"}
              </option>
            }

            {this.state.week.map((week, index) => {
              return (
                <option value={week.id} key={index}>
                  {" "}
                  {week}{" "}
                </option>
              );
            })}
          </select>

          <div className="error"> {weekDayError} </div>

          <div className="error"> {"" + this.props.message} </div>

          {this.props.id ? (
            <div>
              <button
                className="edit-button"
                onClick={e => {
                  e.preventDefault();
                  console.log(inputValues);
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
                  history.push(`../../courses`);
                }}
              >
                Save and close
              </button>
              <button
                className="edit-button"
                onClick={() => {
                  history.push("../../courses");
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
                  this.refs.selectTeacher.value = null;
                  this.refs.selectClass.value = null;
                  this.refs.name.value = null;
                  this.refs.startDate.value = null;
                  this.refs.endDate.value = null;
                  this.refs.endTime.value = null;
                  this.refs.startTime.value = null;
                  this.refs.week.value = null;
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
                  history.push("../courses");
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

export default CoursesForm;
