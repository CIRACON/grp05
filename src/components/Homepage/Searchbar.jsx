import React from 'react'

export const Searchbar = ({setSearch}) => {
    
  return (
    <input type='text' style={searchbarStyle} onChange={event => setSearch(event.target.value)} />
  )
}

const searchbarStyle = {
    display: "block",
    width: "95%",
    fontWeight: "bold",
    fontSize: "1.1em",
    lineHeight: "1.5em",
    border: "none",
    borderBottom: "2px solid darkblue",
    outline: "none",
    margin: "5px"
}