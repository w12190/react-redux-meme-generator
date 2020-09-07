import React from 'react'

/** Shows a meme
 * Props
 * - topText
 * - bottomText
 * - imageURL
 * 
 * App -> MemeGenerator -> MemeForm, MemeList (-> MemeCard)
 */
function MemeCard({ topText, bottomText, imageURL }) {
  return (
    <div className= "MemeCard">
      <p>{topText}</p> <br />
        <img src={imageURL} alt="meme card"/>
      <p>{bottomText}</p> <br />
    </div>
  )
}

export default MemeCard