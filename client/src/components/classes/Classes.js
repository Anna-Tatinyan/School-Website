import React from 'react';
import "./classes.css"
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import  history  from '../../history';
import { logout, rawDetecor,isModalOpen, getClasses, deleteClasses, addClasses, updateClasses  } from '../../actions/';

import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import {user} from 'react-icons-kit/ikons/user';
import {book} from 'react-icons-kit/oct/book';
import {university} from 'react-icons-kit/ionicons/university';
import {home} from 'react-icons-kit/iconic/home';

import Modal from '../modal.js'


class Classes extends React.Component {
  constructor(props){
  super(props);

  this.updatedClassObject = {
    firstName: null,
    lastName: null,
    age: null,
    gender: null,
    phone: null,
    email: null
  }
}
  addClasses = (e) => {
        const name = this.addName.value;
        const description = this.addDescription.value;


        this.props.addClasses(name, description);
        this.props.getClasses();
    };

  updateClasses = (e) => {

        this.props.updateClasses(this.updatedClassObject)
        this.props.getClasses();
    };

    componentDidMount() {
       this.props.getClasses();
    }
    render() {
      const styles = {
          width: '180px',
          height: '100%',
          background: '#2c3e50',
          color: '#FFF',
          position: 'fixed',
    };
    const context = this.props;
    return (
      <div className="main">
      <h1 className="head"> Classes </h1>
      <div style={styles}>
      <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' selected='classes' onItemSelection={ (id, parent) => {history.push(`../admin/${id}`)}}>
              <Nav id=''>
                  <NavIcon><SvgIcon size={20} icon={home}/></NavIcon>
                  <NavText> Dashboard </NavText>
              </Nav>
              <Nav id='students'>
              <NavIcon><SvgIcon size={20} icon={university}/></NavIcon>
              <NavText> Students </NavText>
          </Nav>
          <Nav id='classes'>
              <NavIcon><SvgIcon size={20} icon={book}/></NavIcon>
              <NavText> Classes </NavText>
          </Nav>
          <Nav id='teachers'>
              <NavIcon><SvgIcon size={20} icon={user}/></NavIcon>
              <NavText> Teachers </NavText>
          </Nav>
      </SideNav>
  </div>
  <div className="container">
      <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Class</button>
      <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Add a new Class</h4>
                  </div>
                  <div className="modal-body">
                      <form  onSubmit={this.addClasses}>
                          <input type="text" id="aname" name="name" placeholder="Name of the class.." ref={(input) => this.addName = input}/>
                          <input type="text" id="aname" name="description" placeholder="Description.." ref={(input) => this.addDescription = input}/>

                          <input className="submit" type="submit" value="Submit" />
                      </form>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
  </div>

        <button type="button" className="btn btn-default" onClick={this.props.logout}>
        <span className="glyphicon glyphicon-log-out"></span>Logout</button>
        <table className="classes">
        <tr>
           <th>name</th>
           <th>description</th>
           <th>actions</th>
         </tr>
        { this.props.classesArray.map((classesObject, index) => { if(this.props.raw === index){ this.updatedClassObject = context.classesArray[index]} return(

            <tr>
                   <td>{classesObject.name}</td>
                   <td>{classesObject.description}</td>
                   <td>
                   <button className="white" onClick={ ()=>{ context.rawDetecor(index); context.isModalOpen('second'); }}> Delete
                   </button>
                   <button className="gray" onClick={ ()=> { context.rawDetecor(index); context.isModalOpen('first'); }}> Edit
                   </button>
               </td>
           </tr>
           )}) }
        </table>
        <Modal show={this.props.showModal==='first' } handleClose={()=>{this.props.isModalOpen()}}>
            <div className="modal-body">
                <form>
                    <input type="text" id="afname" name="name" defaultValue={this.updatedClassObject.name} onChange={ e=> {this.updatedClassObject.name=e.target.value;}} />
                    <input type="text" id="adescr" name="description" defaultValue={this.updatedClassObject.description} onChange={ e=> this.updatedClassObject.description=e.target.value}/>

                    <div className="button-question">
                      <button className = "actions" onClick={ (e)=>{this.updateClasses(e); this.props.isModalOpen()}}> edit </button>
                      <button className = "actions" onClick={this.props.isModalOpen}>close</button>
                    </div>
                </form>
            </div>
        </Modal>
        <Modal show={this.props.showModal==='second' } handleClose={()=>{this.props.isModalOpen(false)}}>

            <div className="modal-body">
                <p className = "warning">Are you sure you want to permanently delete it? </p>
                <div className="button-question">
                  <button className = "actions" onClick={()=> {context.deleteClasses(this.props.classesArray[this.props.raw].id); context.getClasses(); this.props.isModalOpen()}}>{"yeah, I don't care"}</button>
                  <button className = "actions" onClick={this.props.isModalOpen}>nope</button>
                </div>
            </div>
        </Modal>
      </div>
    )
  }
}
function mapStateToProps(state) {

    return {
      classesArray: state.getClassesArray.classesArray,
      showModal: state.isModalOpen.showModal,
      raw: state.getTeachersArray.raw
    };
}

export default connect(mapStateToProps, {logout,rawDetecor,isModalOpen, getClasses, deleteClasses, addClasses, updateClasses})(Classes);
