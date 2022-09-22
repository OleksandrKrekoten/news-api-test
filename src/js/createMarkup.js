    function createMarkup(response) {
    return response.data.articles.map(({author, content, description, publishedAt, url,title , urlToImage
}) =>
   `<a href="${url}" class="gallery-news__link"></a>
        <img src="${urlToImage}" alt="" class="gallery-news__images">
        <h2 class="gallery-news__title">${title}</h2>
        <p class="gallery-news__discription">${description}</p>
        
         </a>
      `)
}



export { createMarkup }