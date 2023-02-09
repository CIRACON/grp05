// import { work_locations } from "../backend/work_locations"

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

export async function getFilteredEmployees(name, phone_number, job_role, work_location, division, department) {

    let url = `http://localhost:4000/filterEmployees`

    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name ? name : null,
            phone_number: phone_number ? phone_number : null,
            job_role: job_role ? job_role : null,
            work_location: work_location ? work_location : null,
            division: division ? division : null,
            department: department ? department : null,
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
export async function getSearchResource(resource) {

    // Where do you find the url? In the index.js
    // resource is just a string it's the name of the 'thing' we wanna get.
    let url = `http://localhost:4000/resource/search/getAll/${resource}`

    try {
    
        return await fetch(url).then(res => res.json())
    } catch (ex) {
        console.error(`Error fetching employees: ${ex.message}`)
    }
}
