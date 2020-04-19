import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/header.js";
import Aside from "./components/aside.js";
import Main from "./components/main.js";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'Cheese'
      },
      formInputs: {
        name: null,
        location: null,
        milk: null,
        id: null
      }
    }
  }

  handleView = (view, postData) => {
    let pageTitle= '';
    let formInputs = {
      name: '',
      location: '',
      milk: '',
      id: null
    }
    switch(view) {
      case 'home':
        pageTitle = 'Cheeses'
        break
      case 'addPost':
        pageTitle = 'Tell me about a cheese'
        break
      case 'editPost':
        pageTitle = 'Edit this cheese info'
        formInputs = {
          name: postData.name,
          location : postData.location,
          milk: postData.milk,
          id: postData.id
        }
        break
      default:
      break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
    })
  }
  //left this untouched for genaro
  render() {
    return (
      <div>
        <Header/>
        <Aside handleView={this.handleView}/>
        <Main
        handleView={this.handleView}
        view={this.state.view}
        formInputs={this.state.formInputs}/>
      </div>
    )
  }
}

export default App;
