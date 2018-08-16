import React from 'react';
import students from './students.png';
import "./home.css"
import history from '../../history'

class Home extends React.Component {
  render() {
    let buttonName = (localStorage.getItem('user') ? 'Continue' : 'Login')

    return (
      <div className="bg">

            <header className="App-header">
              <h1 className="App-title">School website</h1>

                <button onClick = {() => {history.push('/login')}} className="login-button">
                    {buttonName}
                </button>


            </header>
            <img alt = "students" src={students}/>
          </div>
    )
  }
}


export default Home;
