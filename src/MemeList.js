import React from 'react'
import MemeCard from './MemeCard'
import {v4 as uuid} from 'uuid'
import { useDispatch } from 'react-redux'

/** Displays a list of MemeCards
 * 
 * App -> MemeGenerator -> MemeForm, MemeList (-> MemeCard)
 */
function MemeList({ memes }){
  const dispatch = useDispatch()

  function deleteMeme(evt){
    dispatch({type: "DELETE_MEME", payload: evt.target.id})
  }

  return (
  <div className="MemeList">
    {memes.map(meme => <>
                          <MemeCard key={meme.id}
                                    topText={meme.topText}
                                    bottomText={meme.bottomText}
                                     imageURL={meme.imageURL} />
                          <button data-memeid={meme.id} onClick={deleteMeme} id={meme.id}>
                              Delete
                          </button>
                        </>)}
  </div>
  )
}
//Alternative: <button onClick={evt => deleteMeme(meme.id)}>
export default MemeList