const goto = document.getElementById('goto')
const gotoInput = document.getElementById('goto-input')
gotoInput.value = ''
const gotoOpts = document.getElementById('goto-opts')

document.addEventListener('keydown', (event) => {
    if (['.', '/'].includes(event.key)) {
        event.preventDefault()
        gotoInput.focus()
    }
    else if (event.key === 'Escape') {
        gotoInput.blur()
        gotoOpts.style.display = 'none'
    }
    if (document.activeElement === gotoInput) {
        currentIndex = Array.from(gotoOpts.children).indexOf(document.querySelector('.goto-opt.active'))
        if (currentIndex === -1) currentIndex = 0
        if (event.key === 'Enter') {
            gotoOpts.children[currentIndex].onclick()
            gotoInput.blur()
            updateOpts()
        }
        else if (event.key === 'ArrowDown') {
            if (currentIndex < gotoOpts.children.length - 1) {
                clearGotoOptionActive()
                gotoOpts.children[currentIndex + 1].classList.add('active')
            }
        }
        else if (event.key === 'ArrowUp') {
            if (currentIndex > 0) {
                clearGotoOptionActive()
                gotoOpts.children[currentIndex - 1].classList.add('active')
            }
        }
    }
})
document.addEventListener('visibilitychange', (event) => {
    if (document.visibilityState !== 'visible') {
        gotoInput.blur()
    }
})
goto.addEventListener('focusin', () => {
    gotoOpts.style.display = 'block'
})
goto.addEventListener('focusout', () => {
    if (!window.mouseingoto) {
        gotoOpts.style.display = 'none'
    }
})
goto.addEventListener('mouseenter', () => {
    window.mouseingoto = true
})
goto.addEventListener('mouseleave', () => {
    window.mouseingoto = false
})

function addGoToOption(title, desc, f) {
    const option = document.createElement('div')
    option.classList.add('goto-opt')
    option.innerHTML = `<div class="goto-title">${title}</div><div class="goto-desc">${desc}</div>`
    option.onclick = () => {
        f()
        gotoInput.value = ''
        gotoInput.blur()
        gotoOpts.style.display = 'none'
    }
    gotoOpts.appendChild(option)
    option.addEventListener('mouseover', () => {
        clearGotoOptionActive()
        option.classList.add('active')
        window.currentIndex = Array.from(gotoOpts.children).indexOf(option)
    })
    return option
}
function clearGotoOptionActive() {
    new Array(...gotoOpts.children).forEach((el) => el.classList.remove('active'))
}
