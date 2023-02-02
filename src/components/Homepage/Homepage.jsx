import React from 'react'
import { useEffect, useState } from 'react'


export const Homepage = () => {

    let people;

    let getIdFrom;
    let id;

    function fetchAllPeople() {

        let people = [];
    
        let url = `https://swapi.dev/api/people`;
    
        //while (url) {
            try {
                const fetchPeople = fetch(url).then(res => res.json())
                    .then(res => {
                        url = res.next;
                        return res
                    })
                people.push(...fetchPeople)
            } catch (ex) {
                console.error(`Error reading people.`, ex.message);
            }
    
       // }
        console.log(people)
        return people;
    }

    useEffect(() => {
      console.log(fetchAllPeople)
    }, [])
    
  return (
    <>
    <div>Homepage</div>
    <button onClick={fetchAllPeople}>show me the people array</button>
    </>
  )
}
