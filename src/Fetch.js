function fetchPerson(id) {
    let url = `https://swapi.dev/api/people/${id}`;

    try {
        const person = fetch(url).then(res => res.json());
        return person;
    } catch (ex) {
        console.error(`Error reading person ${id} data.`, ex.message);
    }
}

function fetchAllPeople() {

    let people;

    let url = `https://swapi.dev/api/people`;

    while (url) {
        try {
            const fetchPeople = fetch(url).then(res => res.json());
            .then()
            .then(res => {
                url = res.next; 
                return res
            })
        } catch (ex) {
            console.error(`Error reading person ${id} data.`, ex.message);
        }
        
    }
    
}