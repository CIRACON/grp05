import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchById, getIdFrom } from '../../Fetch'
import '../components.css'

export const Films = () => {
  const [people, setPeople] = useState([])
  const [planets, setPlanets] = useState([])
  const [film, setFilm] = useState({})
  const {id} = useParams()
    
  useEffect(() => {
    fetchById('films', id)
    .then(res => {setFilm(res)})
  }, [])

  useEffect(() => {
    if (Object.keys(film).length === 0)
      return 
        
      film.characters.forEach(person => {
        fetchById('people', getIdFrom('people', person)).then(res => {
          let check = 0;
          people.forEach(person => {
            if (person.name === res.name)
              check = 1
          })
          
          if (!check)
            setPeople(oldPeopleList => [...oldPeopleList, res])
        })
      })

    film.planets.forEach(planet => {
      fetchById('planets', getIdFrom('planets', planet)).then(res => {
        let check = 0;
        planets.forEach(planet => {
          if (planet.name === res.name)
            check = 1
        })
        
        if (!check)
          setPlanets(oldPlanetList => [...oldPlanetList, res])
      })
    })
  }, [film])

  return (
    <>
      <div>
        <h1 id="name">{film.title}</h1>
      </div>
      <section id="generalInfo">
        <p>Released: {film.release_date}</p>
        <p>Director: {film.director}</p>
        <p>Episode: {film.episode_id}</p>
      </section>
      <section id="planets">
        <h2>Characters</h2>
        <ul>
          {people.map(person => <li><a href={`/PersonInfo/${person.id}`}>{person.name}</a></li>)}
        </ul>
      </section>
      <section id="films">
        <h2>Planets</h2>
        <ul>
          {planets.map(planet => <li><a href={`/Planets/${planet.id}`}>{planet.name}</a></li>)}
        </ul>
      </section>
    </>
  )
}

