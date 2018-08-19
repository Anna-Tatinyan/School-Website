import React from "react";
import "../../../../index.css";
import history from "../../../../history";
import Modal from "../../../../components/modal.js";
import SweetAlert from 'react-bootstrap-sweetalert';
class TeachersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      row: null
    };
    super(props);

    this.updatedTeacherObject = {
      firstName: null,
      lastName: null,
      age: null,
      gender: null,
      phone: null,
      email: null
    };
  }

  componentDidMount() {
    this.props.getTeachers();
  }

  render() {
    const tableStyle = {
      margin: " 10% 10px 0 58px"
    };
    const blueStyle = {
      margin: "50px -14% 0 20%"
    };

    return (
      <div className="main">
        <button
          className="blue"
          style={blueStyle}
          onClick={() => history.push("/admin/teachers/add")}
        >
          Add Teacher
        </button>
        <table className="table" style={tableStyle}>
          <tbody>
            <tr className="header">
              <th>firstname</th>
              <th>lastname</th>
              <th>phone</th>
              <th>email</th>
              <th>options</th>
            </tr>
            {this.props.teachersArray
              ? this.props.teachersArray.map((teacherObject, index) => {
                  if (this.state.row === index) {
                    this.updatedTeacherObject = this.props.teachersArray[index];
                  }
                  return (
                    <tr key={teacherObject.id}>
                      <td>{teacherObject.firstName}</td>
                      <td>{teacherObject.lastName}</td>
                      <td>{teacherObject.phone}</td>
                      <td>{teacherObject.email}</td>
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
                              `/admin/teachers/edit/${teacherObject.id}`
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
                  this.props.deleteTeacher(
                    this.props.teachersArray[this.state.row].id
                  );
                  this.setState({ showModal: false });
                }}
              >
                {"Yes"}
              </button>
              <button
                className="actions"
                onClick={() => {
                  this.setState({ showModal: false });
                }}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
        { this.props.errorMessage ?
          <SweetAlert
          style = {{height: "500px"}}
            warning
            showCancel
            cancelBtnBsStyle="warning"
            confirmBtnText="Yes I want to change classes"
            confirmBtnBsStyle="danger"
            title="Do you want to go and change classes?"
            onConfirm={() => {this.props.deleteErrorMessage(); history.push("./classes")}}
	          onCancel={() => this.props.deleteErrorMessage()}

            >
            Cannot eliminate a teacher that has a class or a course.
            </SweetAlert>
                    : true}
        </div>
    );
  }
}
export default TeachersList;
