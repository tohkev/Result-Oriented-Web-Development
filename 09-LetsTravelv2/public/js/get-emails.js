async function getEmailRequests() {
    return await fetch('http://localhost:3000/emails')
        .then((resp) => resp.json())
        .then((data) => data)
}