const fetch = () => {
    const result = axios({
        url: 'https://jsonplaceholder.typicode.com/posts', 
        method: "GET"

    }).then((fromResolve) => {
        return fromResolve
    }).catch((fromReject) =>{
        return fromReject
    })

    return result
}

fetch().then((data) => {
    console.log(data)
})