import "./styles.css"
import { renderHomePage } from "./home.js"
import { renderMenuPage } from "./menu.js"
import { renderContactPage } from "./contact.js"

const content = document.getElementById('content')
const nav = document.getElementById('main-nav')

const pages = {
    home: renderHomePage,
    menu: renderMenuPage,
    contact: renderContactPage
}

function navigateTo(pageKey) {
    const renderpage = pages[pageKey]

    if (renderpage) {
        content.innerHTML = ""
        content.appendChild(renderpage())
    }
}

nav.addEventListener('click', (e) => {
    const target = e.target
    if (target.tagName === 'BUTTON') {
        const pageKey = target.getAttribute('data-page')
        navigateTo(pageKey)
    }
})

document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home')
})