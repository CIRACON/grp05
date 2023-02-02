import React from 'react'
import { useEffect, useState } from 'react'
import { fetchPerson, fetchPlanet } from '../../Fetch'

export const PersonInfo = ({id}) => {
  const [person, setPerson] = useState({})
  const [planet, setPlanet] = useState({})
  const [films, setFilms] = useState({})
    
  useEffect(() => {
    fetchPerson(id).then(res => {
      setPerson(res)
      console.log(res)
    })

  }, [])

  return (
    <>
      <div>
        <h1>{person.name}</h1>
      </div>
      <div>
        <p>Height: {person.height} cm</p>
        <p>Mass: {person.mass} kg</p>
        <p>Born: {person.birth_year}</p>
      </div>
      <div>
        <h2>Homeworld</h2>
        <p>{person.homeworld}</p>
      </div>
      <div>
        <h2>Films</h2>
        <ul>
          {person.films.map(film => <li>{film}</li>)}
        </ul>
      </div>
    </>
  )
}

