import { work_locations } from "../backend/work_locations"

export async function isAuthenticated(username, password) {

    let url = `http://localhost:4000/login`

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }

    try {
        return await fetch(url, fetchOptions).then(res => res.status === 200)
    } catch (ex) {
        console.error(`Error authenticating: ${ex.message}`)
    }
}

export async function getFilteredEmployees(name, phone) {

    let url = `http://localhost:4000/filterEmployees`

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
        })
    }

    try {
        console.log(fetchOptions.body)
        return await fetch(url, fetchOptions).then(res => res.json())
    } catch (ex) {
        console.error(`Error fetching employees: ${ex.message}`)
    }
}

//get request for work location, division and department
export async function getSearchResource(workLocation, division, department) {

    // collin will give me the url later.
    let url = `http://localhost:4000/filterEmployees`

    try {
        return await fetch(url).then(res => res.json())
    } catch (ex) {
        console.error(`Error fetching employees: ${ex.message}`)
    }
}
