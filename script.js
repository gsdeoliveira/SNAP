menu_dropdown = document.getElementsByClassName('dropdown')
features_menu = document.getElementById('features-menu')
company_menu = document.getElementById('company-menu')

for (menu of menu_dropdown) {
    menu.addEventListener("click", elemento => {
    console.log(getComputedStyle(features_menu, ':after'))

    if (elemento.target.innerHTML == 'Company') {
        if (getComputedStyle(company_menu).display == 'none') {
            features_menu.style.display = 'none'
            company_menu.style.display = 'block'
            document.documentElement.style.setProperty('--ArrowCompany', 'url(images/icon-arrow-up.svg)')
            
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

            
        }
        else {
            features_menu.style.display = 'none'
            document.documentElement.style.setProperty('--ArrowFeatures', 'url(images/icon-arrow-down.svg)')

        }
    }
    })

}