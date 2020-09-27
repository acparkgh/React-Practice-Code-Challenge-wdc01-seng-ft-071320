import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => {return props.nextFourSushiFunction()}}>
            More sushi!
          </button>
}

export default MoreButton