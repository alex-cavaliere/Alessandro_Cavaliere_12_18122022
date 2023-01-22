import { useParams } from "react-router-dom"

/* eslint-disable no-useless-constructor */
class Api {
    constructor(url) {
        this.url = url 
    }
    async getUserInfo(id) {
        return fetch(this.url + id)
            .then(res => res.json())
            .then(res => res.data)
            .catch(err => console.log('an error occurs', err))
    }
    async getUserActivity(id){
        return fetch(this.url + id + '/activity')
        .then(res => res.json())
        .then(res => res.data)
        .catch(err => console.log('an error occurs', err))
    }
    async getUserSession(id){
        return fetch(this.url + id + '/average-sessions')
        .then(res => res.json())
        .then(res => res.data)
        .catch(err => console.log('an error occurs', err))
    }
    async getUserPerformance(id){
        return fetch(this.url + id + '/performance')
        .then(res => res.json())
        .then(res => res.data)
        .catch(err => console.log('an error occurs', err))
    }
}


class DataApi extends Api {
    constructor(url){
        super(url)
    }
    async getData() {
        return (
            await this.getUserInfo(),
            await this.getUserActivity(),
            await this.getUserSession(),
            await this.getUserPerformance()
        )
    }
}

export default DataApi;