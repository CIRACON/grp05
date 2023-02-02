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

    let people = [];

    let url = `https://swapi.dev/api/people`;

    while (url) {
        try {
            const fetchPeople = fetch(url).then(res => res.json())
                .then(res => {
                    url = res.next;
                    return res
                })
                .then(res => res.results)
                .then(res => res.map(p => ({ ...p, id: +getIdFrom(p.url) })))
            people.push(...fetchPeople)
        } catch (ex) {
            console.error(`Error reading person ${id} data.`, ex.message);
        }

    }
    return people;
}

const getIdFrom = (entityName, url) => {
    const re = new RegExp(`.*${entityName}\/(\\d+).*`);
    const matches = url.match(re)
    if (!matches) throw `Bad URL. Not a ${entityName} URL.`
    return matches[1]
}
