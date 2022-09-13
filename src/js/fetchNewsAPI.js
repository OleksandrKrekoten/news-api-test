const axios = require('axios').default;

export default class NewsApiService {
    constructor() {
        this.searchQuery = 'ukraine'
        this.per_page = 20
        this.page = 1
    }
   async feachNews() {
        const URL = 'https://newsapi.org/v2/everything'
       
      return  axios.get(URL, {
            params: {
              apiKey: 'e177b938923543079e116a9aec299619',
            q: this.searchQuery,
              pageSize: this.per_page,
            page: this.page
            }
        })
            
    }
    incrementPage() { 
        this.page += 1;
    }

    resetPage() { 
        this.page = 1;
    }
    get query() {
        return this.searchQuery
    }
    set query(newQuery) {
        this.searchQuery = newQuery
    }
    
}