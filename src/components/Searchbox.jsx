import React from 'react'

const Searchbox = (props) => {
  return (
    <div>
    <input
        className="form-control"
        placeholder='Type to Search...'
        value={props.value}
        onChange={(event) =>props.setSearchValue(event.target.value)}
    />
    </div>
  )
}

export default Searchbox