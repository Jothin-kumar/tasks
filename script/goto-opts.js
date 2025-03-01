const newTaskOpt = addGoToOption(
    'Create new task',
    'Enter your title and hit enter to create a new task. Use up/down arrow to choose other options.',
    () => console.log('Create new task')
)
newTaskOpt.classList.add('active')
const searchTaskOpt = addGoToOption(
    'Search tasks',
    'Type your search query and hit enter to search tasks.',
    () => alert('Search tasks')
)
const infoAndSettingsOpt = addGoToOption(
    'Info & settings',
    'Customize this app / View usage guide',
    () => alert('Info & settings')
)

gotoInput.addEventListener('input', (event) => {
    const txt = gotoInput.value.trim()
    if (txt) {
        newTaskOpt.innerHTML = `<div class="goto-title">Create new task</div><div class="goto-desc">Create a task with title "${txt}"</div>`
        searchTaskOpt.innerHTML = `<div class="goto-title">Search tasks</div><div class="goto-desc">Search tasks for "${txt}"</div>`
    }
    else {
        newTaskOpt.innerHTML = `<div class="goto-title">Create new task</div><div class="goto-desc">Enter your title and hit enter to create a new task. Use up/down arrow to choose other options.</div>`
        searchTaskOpt.innerHTML = `<div class="goto-title">Search tasks</div><div class="goto-desc">Type your search query and hit enter to search tasks.</div>`
    }
})