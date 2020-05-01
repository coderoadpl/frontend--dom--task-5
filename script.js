function prepend(container, element) {
    container.insertBefore(element, container.firstElementChild)
}
function remove(element) {
    element.parentElement.removeChild(element)
}

const container = document.querySelector('.container')

const p = document.createElement('p')

p.innerText = '>> Lorem ipsum dolor sit amet. <<'
p.setAttribute('class', 'paragraph fourth')

prepend(container, p)

// element will be moved form prev position to new
// if it is already displayed (included in DOM)
container.appendChild(p)

remove(document.querySelector('.first'))
