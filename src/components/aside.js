import React from 'react'

class Aside extends React.Component {
  render() {
    return(
      <aside>
        <h1>Navigate</h1>
        <ul className="navBar">
          <li onClick={
            ()=>{this.props.handleView('home')}
          }>Go Home</li>
          <li onClick={
            ()=>{this.props.handleView('addPost')
          }
          }>Add Cheese</li>
        </ul>
      </aside>
    )
  }
}

export default Aside
