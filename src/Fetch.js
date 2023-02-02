export async function fetchPerson(id) {
    let url = `https://swapi.dev/api/people/${id}`;

    try {
        return await fetch(url).then(res => res.json());
    } catch (ex) {
        console.error(`Error reading person ${id} data.`, ex.message);
    }
}

export async function fetchAllPeople() {

    let people = [];

    let url = `https://swapi.dev/api/people/`;

    while (url) {
        try {
            const fetchPeople = await fetch(url)
                .then(res => res.json())
                .then(res => { url = res.next; return res })
                .then(res => res.results)
                .then(res => res.map(p => ({ ...p, id: + getIdFrom('people', p.url) })))

            people.push(...fetchPeople)
        } catch (ex) {
            console.error(`Error reading people.`, ex.message);
        }
   }

    return people;
}

export async function fetchFilm(id) {
    let url = `https://swapi.dev/api/films/${id}`;

    try {
        return await fetch(url).then(res => res.json());
    } catch (ex) {
        console.error(`Error reading film ${id} data.`, ex.message);
    }
}

export async function fetchPlanet(id) {
    let url = `https://swapi.dev/api/planets/${id}`;

    try {
        return await fetch(url).then(res => res.json());
    } catch (ex) {
        console.error(`Error reading planet ${id} data.`, ex.message);
    }
}

export function getIdFrom(entityName, url) {
    const re = new RegExp(`.*${entityName}\/(\\d+).*`);
    const matches = url.match(re)
    if (!matches) throw `Bad URL. Not a ${entityName} URL.`
    return matches[1]
}
