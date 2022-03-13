let count = 0
let isOver = true
const anim = () => {
    isOver = false
    if (count - 1) {
        isOver = true
        return
    }
    bar.firstChild.classList.add("filled")
    setTimeout(() => {
        bar.firstChild.classList.remove("filled")
        remain.innerHTML = --count != 0 ? "&nbsp;" + count : ""
    }, 3000);
    setTimeout(() => {
        anim()
    }, 3100);
}
const handleClick = e => {
    remain.innerHTML = `&nbsp;${++count}`
    isOver ? anim() : ''
}
btn.addEventListener('click', handleClick);