import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFilm, fetchPlanet, getIdFrom } from '../../Fetch'
import '../components.css'

export const Planets = () => {
  const [planet, setPlanet] = useState({})
  const [films, setFilms] = useState([])
  const {id} = useParams()
    
  useEffect(() => {
    fetchPlanet(id)
    .then(res => {setPlanet(res)})
  }, [])

  useEffect(() => {
    if (Object.keys(planet).length == 0)
      return 
        
    planet.films.forEach(film => {
      fetchFilm(getIdFrom('films', film)).then(res => {
        let check = 0;
        films.forEach(film => {
          if (film.title === res.title)
            check = 1
        })
        
        if (!check)
          setFilms(oldFilmList => [...oldFilmList, res])
      })
    })

  }, [planet])

  return (
    <>
      <div>
        <h1 id="name">{planet.name}</h1>
      </div>
      <section id="generalInfo">
        <p>Population: {planet.population}</p>
        <p>Climate: {planet.climate}</p>
        <p>Terrain: {planet.terrain}</p>
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

