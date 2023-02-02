import React from 'react'
import { Person } from './Person'
import { Searchbar } from './Searchbar'
import { useState } from 'react'


export const Homepage = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Searchbar setSearch={setSearch} />
      <Person search={search} />
    </>
  )
}