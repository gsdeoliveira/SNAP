menu_dropdown = document.getElementsByClassName('dropdown')
topo = document.getElementById('topo')
dropdown = document.getElementById('menudropdown')
burger_menu = document.getElementById('burger-menu')
features_menu = document.getElementById('features-menu')
company_menu = document.getElementById('company-menu')
menu_burger_icon = document.getElementById('menu-burger-icon')
burger_features = document.getElementById('burger-features')
burger_features_menu = document.getElementById('burger-features-menu')
burger_company = document.getElementById('burger-company')
burger_company_menu = document.getElementById('burger-company-menu')

document.addEventListener('mouseup', e => {
    var container = topo
    if (!container.contains(e.target)) {
        features_menu.style.display = 'none'
        company_menu.style.display = 'none'
        burger_menu.style.display = 'none'
        menu_burger_icon.src = 'images/icon-menu.svg'
        document.documentElement.style.setProperty('--ArrowFeatures', 'url(images/icon-arrow-down.svg)')
        document.documentElement.style.setProperty('--ArrowCompany', 'url(images/icon-arrow-down.svg)')

    }
})

for (menu of menu_dropdown) {
    menu.addEventListener("click", elemento => {

    if (elemento.target.innerHTML == 'Company') {
        if (getComputedStyle(company_menu).display == 'none') {
            features_menu.style.display = 'none'
            company_menu.style.display = 'block'
            document.documentElement.style.setProperty('--ArrowCompany', 'url(images/icon-arrow-up.svg)')
            document.documentElement.style.setProperty('--ArrowFeatures', 'url(images/icon-arrow-down.svg)')
            
        }
        else {
            company_menu.style.display = 'none'
            document.documentElement.style.setProperty('--ArrowCompany', 'url(images/icon-arrow-down.svg)')

        }
    }

    if (elemento.target.innerHTML == 'Features') {
        if (getComputedStyle(features_menu).display == 'none') {
            company_menu.style.display = 'none'
            features_menu.style.display = 'block'
            document.documentElement.style.setProperty('--ArrowFeatures', 'url(images/icon-arrow-up.svg)')
            document.documentElement.style.setProperty('--ArrowCompany', 'url(images/icon-arrow-down.svg)')

            
        }
        else {
            features_menu.style.display = 'none'
            document.documentElement.style.setProperty('--ArrowFeatures', 'url(images/icon-arrow-down.svg)')

        }
    }

    })

}

menu_burger_icon.addEventListener("click", () => {
    if (menu_burger_icon.src.includes('images/icon-close-menu.svg')) {
        burger_menu.style.display = 'none'
        menu_burger_icon.src = 'images/icon-menu.svg'

    }
    else {
        burger_menu.style.display = 'block'
        menu_burger_icon.src = 'images/icon-close-menu.svg'

    }
})

burger_features.addEventListener("click", () => {
    if (getComputedStyle(burger_features_menu).display == 'none') {
        burger_features_menu.style.display = 'list-item'
        document.documentElement.style.setProperty('--ArrowFeatures', 'url(images/icon-arrow-up.svg)')
        document.documentElement.style.setProperty('--DistanciaAfterFeatures', '35px')

    }
    else {
        burger_features_menu.style.display = 'none'
        document.documentElement.style.setProperty('--ArrowFeatures', 'url(images/icon-arrow-down.svg)')
        document.documentElement.style.setProperty('--DistanciaAfterFeatures', '1px')

    }

})

burger_company.addEventListener("click", elemento => {
    if (getComputedStyle(burger_company_menu).display == 'none') {
        burger_company_menu.style.display = 'list-item'
        document.documentElement.style.setProperty('--ArrowCompany', 'url(images/icon-arrow-up.svg)')
        document.documentElement.style.setProperty('--DistanciaAfterCompany', '10px')

        
    }
    else {
        burger_company_menu.style.display = 'none'
        document.documentElement.style.setProperty('--ArrowCompany', 'url(images/icon-arrow-down.svg)')
        document.documentElement.style.setProperty('--DistanciaAfterCompany', '1px')

    }


    //document.documentElement.style.setProperty('--DistanciaAfterCompany', '11px')
})