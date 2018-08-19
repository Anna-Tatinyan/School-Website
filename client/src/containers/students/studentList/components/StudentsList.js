import React from "react";
import "../../../../index.css";
import history from "../../../../history";

import Modal from "../../../../components/modal.js";

class StudentsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      row: null
    };
    super(props);

    this.updatedStudentObject = {
      firstName: null,
      lastName: null,
      age: null,
      gender: null,
      phone: null,
      email: null,
      classId: null
    };
  }

  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    return (
      <div className="main">
        <h1 className="head"> Students </h1>

        <button
          className="blue"
          onClick={() => history.push("/admin/students/add")}
        >
          Add Student
        </button>

        <table className="table">
          <tbody>
            <tr className="header">
              <th>firstname</th>
              <th>lastname</th>
              <th>gender</th>
              <th>phone</th>
              <th>email</th>
              <th>age</th>
              <th>class</th>
              <th>options</th>
            </tr>
            {this.props.studentsArray
              ? this.props.studentsArray.map((studentsObject, index) => {
                  if (this.state.row === index) {
                    this.updatedStudentObject = this.props.studentsArray[index];
                  }
                  return (
                    <tr key={studentsObject.id}>
                      <td>{studentsObject.firstName}</td>
                      <td>{studentsObject.lastName}</td>
                      <td>{studentsObject.gender}</td>
                      <td>{studentsObject.phone}</td>
                      <td>{studentsObject.email}</td>
                      <td>{studentsObject.age}</td>
                      <td>
                        {!studentsObject.Class
                          ? "not available"
                          : studentsObject.Class.name}
                      </td>

                      <td>
                        <button
                          className="btn"
                          onClick={() => {
                            this.setState({ row: index, showModal: true });
                          }}
                        >
                          {" "}
                          <i className="fa fa-trash" />
                        </button>
                        <button
                          className="btn"
                          onClick={() =>
                            history.push(
                              `/admin/students/edit/${studentsObject.id}`
                            )
                          }
                        >
                          <i className="fa fa-cog fa-spin" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              : true}
          </tbody>
        </table>

        <Modal show={this.state.showModal}>
          <div className="modal-body">
            <p className="warning">
              Are you sure you want to permanently delete it?{" "}
            </p>
            <div className="button-question">
              <button
                className="actions"
                onClick={() => {
                  this.props.deleteStudent(
                    this.props.studentsArray[this.state.row].id
                  );
                  this.props.getStudents();
                  this.setState({ showModal: false });
                }}
              >
                {"yup"}
              </button>
              <button
                className="actions"
                onClick={() => {
                  this.setState({ showModal: false });
                }}
              >
                nope
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
export default StudentsList;
