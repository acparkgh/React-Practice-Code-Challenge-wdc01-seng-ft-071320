import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.showFourSushi.map(eachSushi => {
                               return <Sushi sushi = {eachSushi} 
                                             sushiEatenFunction = {props.sushiEatenFunction}
                                             key = {eachSushi.id}/>})
        }
        <MoreButton nextFourSushiFunction = {props.nextFourSushiFunction} />
      </div>
    </Fragment>
  )
}

export default SushiContainer