import { createMarkup } from "./js/createMarkup"
import NewsApiService from "./js/fetchNewsAPI"
const newsApiService = new NewsApiService()

const refs = {
    form: document.querySelector('.js-searchForm'), 
    input: document.querySelector('.form-control'),
    submitBtn: document.querySelector('.submitBtn'),
    galleryNews: document.querySelector('.gallery-news'),
    galleryList : document.querySelector('.gallery-news__list')
    
}

refs.input.addEventListener('input', (e) => { newsApiService.searchQuery = e.target.value })
refs.form.addEventListener('submit', onSubmitForm)



function onSubmitForm(e) {
    e.preventDefault()
    resetMarkup()
    newsApiService.feachNews()
        .then(response => {
        if (response.data.articles === 0) {
        return Promise.reject(new Error());
        }
            renderMarkup(response)
            console.log(response);
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
