import { useParams } from "react-router-dom"

/* eslint-disable no-useless-constructor */
class Api {
    static dataUrl = `http://localhost:3000/user/`

    async get(id, action) {
        return fetch(Api.dataUrl + id + action)
            .then(res => res.json())
            .then(res => res.data)
            .catch(err => console.log('an error occurs', err))
    }
}


class DataApi extends Api {
    async getData() {
        return await this.get()
    }
}

export default DataApi;