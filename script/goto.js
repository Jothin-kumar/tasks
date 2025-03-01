const goto = document.getElementById('goto')
const gotoInput = document.getElementById('goto-input')
const gotoOpts = document.getElementById('goto-opts')

document.addEventListener('keyup', (event) => {
    if (event.key === '.') {
        gotoInput.focus()
    }
    else if (event.key === 'Escape') {
        gotoInput.blur()
    }
    if (document.activeElement === gotoInput) {
        currentIndex = Array.from(gotoOpts.children).indexOf(document.querySelector('.goto-opt.active'))
        if (currentIndex === -1) currentIndex = 0
        if (event.key === 'Enter') {
            gotoOpts.children[currentIndex].onclick()
            gotoInput.blur()
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
    option.onclick = f
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
addGoToOption(
    'Create new task',
    'Enter your title and hit enter to create a new task. Use up/down arrow to choose other options.',
    () => console.log('Create new task')
).classList.add('active')
addGoToOption(
    'Search tasks',
    'Type your search query and hit enter to search tasks.',
    () => alert('Search tasks')
)
addGoToOption(
    'Info & settings',
    'Customize this app / View usage guide',
    () => alert('Info & settings')
)

gotoInput.addEventListener('input', (event) => {
    const txt = gotoInput.value
})