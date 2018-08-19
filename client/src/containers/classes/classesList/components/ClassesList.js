import React from "react";
import "../../../../index.css";
import history from "../../../../history";

import Modal from "../../../../components/modal.js";

class ClassesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      row: null
    };
    super(props);

    this.updatedClassesObject = {
      firstName: null,
      lastName: null,
      age: null,
      gender: null,
      phone: null,
      email: null,
      teacherId: null
    };
  }

  componentDidMount() {
    this.props.getClasses();
  }

  render() {
    const tableStyle = {
      margin: " 10% 12px 0 45px"
    };
    const blueStyle = {
      margin: "50px -13% 0 10%"
    };
    const tableWidth = {
      width: "20%"
    };

    return (
      <div className="main">
        <h1 className="head"> Classes </h1>

        <button
          style={blueStyle}
          className="blue"
          onClick={() => history.push("/admin/classes/add")}
        >
          Add Classes
        </button>

        <table style={tableStyle} className="table">
          <tbody>
            <tr className="header">
              <th>name</th>
              <th>teacher</th>
              <th>options</th>
            </tr>
            {this.props.classesArray
              ? this.props.classesArray.map((classesObject, index) => {
                  if (this.state.row === index) {
                    this.updatedClassesObject = this.props.classesArray[index];
                  }
                  return (
                    <tr key={classesObject.id}>
                      <td>{classesObject.name}</td>
                      <td>
                        {!classesObject.Teacher
                          ? "not available"
                          : classesObject.Teacher.firstName +
                            " " +
                            classesObject.Teacher.lastName}
                      </td>

                      <td style={tableWidth}>
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
                              `/admin/classes/edit/${classesObject.id}`
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
                  this.props.deleteClasses(
                    this.props.classesArray[this.state.row].id
                  );
                  this.props.getClasses();
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
export default ClassesList;
