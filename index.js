const fetch = require("node-fetch")
class client {
    constructor(id, auth){
        if(!auth)throw new Error("Missing authorization token.")
        if(!id)throw new Error("Missing bot discord id.")
        this.id = id
        this.auth = auth
    }
    async send(servers){
        await fetch('https://disforge.com/api/botstats/' + this.id, {
            method: 'POST',
            body:  JSON.stringify({'servers': servers}),
            headers: {'Content-Type': 'application/json', 'authorization': this.token},
        }).then(async (res) => {console.log(await res.json())})
    }
}
module.exports = {
    client
}
