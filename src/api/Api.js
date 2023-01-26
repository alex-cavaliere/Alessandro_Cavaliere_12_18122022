/** 
 * @param {number} props User Id
 * @param {string} dataUrl partial path URL
 * @param {string} action final path URL
 * @returns {Promise} data call filtered by Id
 */

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