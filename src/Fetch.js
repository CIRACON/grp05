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

