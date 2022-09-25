
import NewsApiService from "./js/fetchNewsAPI"
const newsApiService = new NewsApiService()

const refs = {
    form: document.querySelector('.js-searchForm'), 
    input: document.querySelector('.form-control'),
    submitBtn: document.querySelector('.submitBtn'),
    galleryNews: document.querySelector('.gallery-news'),
   
    
}


refs.input.addEventListener('input', (e) => { newsApiService.searchQuery = e.target.value })
refs.form.addEventListener('submit', onSubmitForm)


function onSubmitForm(e) {
    e.preventDefault()
    resetMarkup()
    newsApiService.feachNews()
        .then(response => {
            console.log(response.data.results)
            renderMarkup(response)
        }).catch(err => {
            console.log(err);
        })
}
function renderMarkup(response) {
    const markup = createMarkup(response)
    refs.galleryNews.insertAdjacentHTML('beforeend', markup)
    
 }
function resetMarkup() {
    refs.galleryNews.innerHTML = ''
}
   function createMarkup(response) {
    return response.data.results.map(({backdrop_path,release_date,original_title,poster_path
}) =>` <a href="/">
    <img src="https://api.themoviedb.org/3/movie/popular${poster_path}" alt="qweq">
    <h2>${original_title}</h2>
    <p>${release_date}</p>
   </a>`
   
    )
}



