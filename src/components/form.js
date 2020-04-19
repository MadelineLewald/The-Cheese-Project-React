// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Form extends React.Component {
  // ==============
  // STATE
  // ==============
  constructor() {
    super()
    this.state = {
      name: '',
      location: '',
      milk: '',
      id: null
    }
  }

  // ==============
  // HANDLERS
  // ==============
  // handles form change
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  // handles submit
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.view.page === 'addPost') {
      this.props.handleCreate(this.state)
    } else if(this.props.view.page === 'editPost') {

      this.props.handleUpdate(this.state)
    }
  }

  componentDidMount(){
    this.setState({
      name: this.props.formInputs.name,
      location: this.props.formInputs.location,
      milk: this.props.formInputs.milk,
      id: this.props.formInputs.id
    })
  }

  // ==============
  // RENDER
  // ============== 
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name
          <input type="text" placeholder="your name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>
          location
          <input type="text" placeholder="your location" id="location" value={this.state.location} onChange={this.handleChange}/>
        </label>
        <label id="post-form">
          post
          <textarea placeholder="write your words" id="milk" value={this.state.milk} onChange={this.handleChange}></textarea>
        </label>
        <input type="submit" value="share"/>
      </form>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Form
