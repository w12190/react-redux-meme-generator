import React from 'react'
import MemeForm from './MemeForm'
import MemeList from './MemeList'
import { useSelector } from 'react-redux'


/** Generates a list of memes.
 * State:
 * - none this time
 * 
 * Store
 * - memes
 * 
 * App -> MemeGenerator -> MemeForm, MemeList (-> MemeCard)
 */
function MemeGenerator() {
  // State from Redux
  const memes = useSelector(store => store)

  return (
    <div className="MemeGenerator">
      <MemeForm />
      <MemeList memes={memes} />
    </div>
  )
}

export default MemeGenerator