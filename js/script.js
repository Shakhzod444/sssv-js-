import { movies } from './db.js'






let ul = document.querySelector('.promo__interactive-list')
let c = document.querySelector('.promo__bg')
let promo__genre = document.querySelector('.promo__genre')
let promo__title = document.querySelector('.promo__title')
let promo__descr = document.querySelector('.promo__descr')
let promo__ratings = document.querySelector('.promo__ratings')
let inpSearch = document.querySelector('#search')
c.style.backgroundImage = `url('./img/bg.jpg')`
let backimgs = document.querySelector('inputGroup')


/// modal
let mod = document.querySelector('.modal_bg')
let mod2 = document.querySelector('.modal')
let inputGroup = document.querySelector('.inputGroup')
let genre_f = document.querySelector('.genre_f')
let name_f = document.querySelector('.name_f')
let pllot = document.querySelector('.pllot')
let cancel  = document.querySelector('.cancel')



const openmod = () => {
    mod.style.display = 'block'
    mod.style.opacity = '0.2'
    mod2.style.display = 'block'
    mod2.style.opacity = '0.2'

    setTimeout(() => {
        mod.style.opacity = '1'
        mod2.style.opacity = '1'
    }, "100")


}



const  closemod = () => {
   
    mod2.style.display = 'none',
        mod.style.display = 'none'

    setTimeout(() => {
        mod.style.opacity = '0.1'
        mod2.style.opacity = '0.1'

    }, "100")

}








inpSearch.onclick = () => {
    let value = inpSearch.value.toLowerCase().trim()
    
    let filtered = movies.filter(item => {
        if (item.Title.toLowerCase().includes(value)) {
            return item
        }
    })
    
    reload(filtered)
}
const reload = (arr) => {
    ul.innerHTML = ""
    showMovie(arr[0])

    for (let item of arr) {
        let li = document.createElement('li')
        let del = document.createElement('div')

        li.classList.add('promo__interactive-item')
        del.classList.add('delete')

        li.innerHTML = `${arr.indexOf(item) + 1}. ${item.Title}`
        
        li.append(del)
        ul.append(li)

        del.onclick = () => {
            arr = arr.filter(elem => elem.ID !== item.ID)

            reload(arr)
        }
        
        li.onclick = () => {
            showMovie(item)
            openmod()
            // openmov()
       inputGroup.style.background = `url(${item.Poster}) center center/cover`
   genre_f.innerHTML = item.Genre
   name_f.innerHTML = item.Title
   pllot.innerHTML =  item.Plot
        }

        cancel.onclick = () => {
            closemod()

            // genre_f.innerHTML =  movies.Genre
            // name_f.innerHTML = movies.Title
            // pllot.innerHTML =  movies.Plot
        }
        
        
        
        
        
        
        
    }
    
}


const showMovie = (movie) => {
    c.style.backgroundImage = `url('${movie.Poster}')`
    promo__genre.innerHTML = `${movie.Genre}`
    promo__title.innerHTML = `${movie.Title}`
    promo__descr.innerHTML = `${movie.Plot}`
    
}



reload(movies)

// const openmov = (movies) => {
   
// //    inputGroup.style.background = `url(${movies.Poster}) center center/cover`
//    genre_f.innerHTML =  movies.Genre
//    name_f.innerHTML = movies.Title
//    pllot.innerHTML =  movies.Plot
// //    //    promo__ratings[0].innerHTML =  `IMDb: ${movie.imdbRating}`
// // //    promo__ratings[1].innerHTML =  `Кинопоиск: ${movie.Metascore}`


// }






// ДЗ
// 1) Сделать жанры
// 2) Сделать модальное окно где показаны остальные данные так же данне показываются на главное странице
// 3) Рейтинг фильмов по звездам 10 баллов IMDB это 5 звезд
// 4) Поисковик по клику а не по печати 



// inpSearch.onkeyup = () => {
//     let value = inpSearch.value.toLowerCase().trim()

//     let filtered = movies.filter(item => {
//         if(item.Title.toLowerCase().includes(value)) {
//             return item
//         }
//     })

//     reload(filtered)
// }