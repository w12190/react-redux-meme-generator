import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {v4 as uuid} from 'uuid'


/** Form for submitting a meme.
 * State
 * - formData
 * 
 * App -> MemeGenerator -> MemeForm, MemeList (-> MemeCard) */
function MemeForm() {
  // State
  const [formData, setFormData] = useState({topText: "", bottomText: "", imageURL: ""})
  const dispatch = useDispatch()

  /** Handles changes in the form */
  function handleChange(evt) {
    console.log('handleClick()')

    const {name, value} = evt.target
    setFormData(oldFormData => ({ ...oldFormData, [name]: value }))
  }

  /** Handles form submission */
  function handleSubmit(evt) {
    console.log('handleSubmit()')

    evt.preventDefault()

    // Dispatch action
    console.log("ADD_MEME dispatched")
    dispatch({ type: "ADD_MEME", payload: {...formData, id: uuid()}})
  }
  

  return (
    <div className="MemeForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="topText">Top Text: </label> <br />
        <input type="text" id="topText" name="topText" value={formData.topText} onChange={handleChange} /> <br />

        <label htmlFor="bottomText">Bottom Text: </label> <br />
        <input type="text" id="bottomText" name="bottomText" value={formData.bottomText}  onChange={handleChange} /> <br />

        <label htmlFor="imageURL"> URL: </label> <br />
        <input type="text" id="imageURL" name="imageURL" value={formData.imageURL} onChange={handleChange} /> <br />
        <button>Submit</button>
      </form>
    </div>

  )
}

export default MemeForm