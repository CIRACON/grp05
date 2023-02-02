import React from 'react'
import { useEffect, useState } from 'react'
import { fetchAllPeople } from '../../Fetch'

export const Person = ({search}) => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetchAllPeople().then(res => {
      setPeople(res)
      console.log(res)
    })
  }, [])
    
  return (
    <>
      <div style={peopleStyle}>
        {
          people
          .filter(person => {
            return search ? person.name.includes(search) : true
          }).map(filteredPerson => <div style={peopleDivStyle}>{filteredPerson.name}</div>)
        }
      </div>
    </>
  )
}

const peopleStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "0"
}

const peopleDivStyle = {
  padding: "10px",
  margin: "10px",
  border: "1px solid darkblue",
  borderRadius: "5px",
  color: "darkblue",
  backgroundColor: "lightblue",
  fontWeight: "bold",
}