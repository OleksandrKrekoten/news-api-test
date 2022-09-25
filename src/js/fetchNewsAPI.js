const axios = require('axios').default;

export default class NewsApiService {
    constructor() {
        this.URL = 'https://api.themoviedb.org/3/movie/popular'
        this.searchQuery = ''
        this.per_page = 20
        this.page = 1
    }
   async feachNews() {
        // const URL = 'https://api.themoviedb.org/3/movie/popular'
       
      return  axios.get(this.URL, {
            params: {
             api_key: 'ba12bbb2efd4020faab2c5dd14dc19c0',
            

            }
        })
            
    }
    // incrementPage() { 
    //     this.page += 1;
    // }

    // resetPage() { 
    //     this.page = 1;
    // }
    get query() {
        return this.searchQuery
    }
    set query(newQuery) {
        this.searchQuery = newQuery
    }
    
}