export async function fetchById(type, id) {
    let url = `http://localhost:4000/getById/${type}/${id}`;

    try {
        return await fetch(url)
            .then(res => res.json())
            .then(res => res = {...res.fields, id: res._id})
    } catch (ex) {
        console.error(`Error reading {${type}: ${id}}'s data.`, ex.message);
    }
}

export async function fetchAll(type) {

    let url = `http://localhost:4000/getAll/${type}`;

    try {
        return await fetch(url)
            .then(res => res.json())
            .then(res => res.map(p => ({...p.fields, id: p._id})))
    } catch (ex) {
        console.error(`Error reading ${type}.`, ex.message);
    }
}

export function getIdFrom(entityName, url) {
    const re = new RegExp(`.*${entityName}(\\d+).*`);
    const matches = url.match(re)
    if (!matches) throw `Bad URL. Not a ${entityName} URL.`
    return matches[1]
}
