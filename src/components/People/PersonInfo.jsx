import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFilm, fetchPerson, fetchPlanet, getIdFrom } from '../../Fetch'

export const PersonInfo = () => {
  const [person, setPerson] = useState({})
  const [planet, setPlanet] = useState({})
  const [films, setFilms] = useState([])
  const {id} = useParams()
    
  useEffect(() => {
    fetchPerson(id)
    .then(res => {setPerson(res)})
    .then(() => {
        console.log(person)
        
        fetchPlanet(getIdFrom('planets', person.homeworld))
          .then(res => setPlanet(res))

        person.films.forEach(film => {
          fetchFilm(getIdFrom('films', film).then(res => setFilms(films.push(res))))
        })
      }
    )

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
        <p>{planet.name}</p>
      </div>
      <div>
        <h2>Films</h2>
        <ul>
          {films.map(film => <li>{film.title}</li>)}
        </ul>
      </div>
    </>
  )
}

