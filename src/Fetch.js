/* 
This will be the body that we're sending to use to verify that the user exists.

{
    "username": "e1",
    "password" "password"
}
*/

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
        let fetchedData = await fetch(url, fetchOptions)
            .then(res => res.json)
            console.log(fetchedData.status === 200)
        return fetchedData.status === 200;
    } catch (ex) {
        console.error(`Error authenticating: ${ex.message}`)
    }
}

