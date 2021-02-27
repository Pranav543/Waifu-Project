const axios = require('axios')

class WaifuApi {
    constructor(key) {
        this.apikey = key
        this.axios = axios.create({
            baseURL: 'https://mywaifulist.moe/api/v1/',
            timeout: 1000,
            headers: {'apikey': key}
        });
    }

    getUser(id) {
        this.axios.get('user/' + id).then((response) => {
            return response.data;
        }).catch((exception) => {
            console.log(exception.message)
            resolve(null);
        })
    }

    getWaifu(slug) {
        this.axios.get('waifu/' + slug).then((response) => {
            return response.data;
        }).catch((exception) => {
            console.log(exception.message)
            resolve(null);
        })
    }

    searchForWaifu(term) {
        return new Promise((resolve) => {
            this.axios.post('search/beta', { 'term' : term}).then((response) => {
                resolve(response.data.data);
            }).catch((exception) => {
                console.log(exception);
                resolve(null);
            })
        })
    }

    getDailyWaifu() {
        return new Promise((resolve) => {
            this.axios.get('meta/daily').then((response) => {
                resolve(response.data.data);
            }).catch((exception) => {
                console.log(exception);
                resolve(null);
            })
        })
    }
    
    getRandomWaifu() {
        return new Promise((resolve) => {
            this.axios.get('meta/random').then((response) => {
                resolve(response.data.data);
            }).catch((exception) => {
                console.log(exception.message)
                resolve(null);
            })
        });
    }

    getAiring() {
        return new Promise((resolve) => {
            this.axios.get('airing').then((response) => {
                resolve(response.data.data);
            }).catch((exception) => {
                console.log(exception.message)
                resolve(null);
            })
        });
    }

    getAiringForSeason(season, year) {
        let url = `airing/${season}/${year}`
        return new Promise((resolve) => {
            this.axios.get(url).then((response) => {
                resolve(response.data.data);
            }).catch((exception) => {
                console.log(exception.message)
                resolve(null);
            })
        });
    }

    getBestWaifusThisSeason() {
        let url = `airing/best`
        return new Promise((resolve) => {
            this.axios.get(url).then((response) => {
                resolve(response.data.data);
            }).catch((exception) => {
                console.log(exception.message)
                resolve(null);
            })
        });
    }

    getPopularWaifusThisSeason() {
        let url = `airing/popular`
        return new Promise((resolve) => {
            this.axios.get(url).then((response) => {
                resolve(response.data.data);
            }).catch((exception) => {
                console.log(exception.message)
                resolve(null);
            })
        });
    }

    getTrashWaifusThisSeason() {
        let url = `airing/trash`
        return new Promise((resolve) => {
            this.axios.get(url).then((response) => {
                resolve(response.data.data);
            }).catch((exception) => {
                console.log(exception.message)
                resolve(null);
            })
        });
    }
}

module.exports = WaifuApi