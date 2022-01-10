const btnOpenSearch = document.querySelector('#btn-open-search')
const btnCloseSearch = document.querySelector('#btn-close-search')
const formSearch = document.querySelector('#form-search')

console.log(btnOpenSearch)

btnOpenSearch.addEventListener('click', () => {
    console.log('uau')
    formSearch.style.display = 'flex'
})
btnCloseSearch.addEventListener('click', () => {
    console.log('uau2')
    formSearch.style.display = 'none'
})