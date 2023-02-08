import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchById, getIdFrom } from '../../Fetch'
import '../components.css'

export const PersonInfo = () => {
  const [person, setPerson] = useState({})
  const [planet, setPlanet] = useState({})
  const [films, setFilms] = useState([])
  const {id} = useParams()
    
  useEffect(() => {
    fetchById('people', id)
    .then(res => {setPerson(res)})
  }, [])

  useEffect(() => {
    if (!person || Object.keys(person).length == 0)
      return 
        
    fetchById('planets', person.homeworld)
      .then(res => setPlanet(res))

    console.log(planet)
    // person.films.forEach(film => {   No films in db info
    //   fetchById('films', getIdFrom('films', film)).then(res => {
    //     let check = 0;
    //     films.forEach(film => {
    //       if (film.title === res.title)
    //         check = 1
    //     })
        
    //     if (!check)
    //       setFilms(oldFilmList => [...oldFilmList, res])
    //   })
    // })

    // console.log(films)
  }, [person])

  return (
    <>
      <div>
        <h1 id="name">{person.name}</h1>
      </div>
      <section id="generalInfo">
        <p>Height: {person.height} cm</p>
        <p>Mass: {person.mass} kg</p>
        <p>Born: {person.birth_year}</p>
      </section>
      <section id="planets">
        <h2>Homeworld</h2>
        <ul>
          <li><a href={`/Planets/${planet.id}`}>{planet.name}</a></li>
        </ul>
      </section>
      <section id="films">
        <h2>Films</h2>
        <ul>
          {films.map(film => <li><a href={`/Films/${film.id}`}>{film.title}</a></li>)}
        </ul>
      </section>
    </>
  )
}

