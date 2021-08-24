async function getEmailRequests() {
    return await fetch(' /emails')
        .then((resp) => resp.json())
        .then((data) => data)
}