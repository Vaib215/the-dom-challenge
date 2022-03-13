let order = 4
let scr = 0
const createEvent = (o, k) => {
    o.addEventListener('click', function (e) {
        if (e.target === k) {
            createGrid(++order)
            score.innerText = ++scr
        }
        else {
            container.classList.add("shake")
            setTimeout(function () {
                container.classList.remove("shake")
            }, 500);
        }
    });
}
const setCells = o => {
    const cells = document.querySelectorAll('.cell');
    let str = Math.floor(Math.random() * 360)
    let odd = Math.floor(Math.random() * o * o)
    cells.forEach(e => {
        e.style.width = `${100 / o}%`
        e.parentElement.style.height = e.style.width
        e.style.backgroundColor = `hsl(${str},60%,60%)`
        createEvent(e, cells[odd])
    })
    cells[odd].style.backgroundColor = `hsl(${str},60%,75%)`
}
const createGrid = o => {
    let str = ""
    for (let i = 0; i < o; i++) {
        str += '<div class="row">';
        for (let i = 0; i < o; i++) {
            str += '<div class="cell"></div>';
        }
        str += '</div>';
    }
    container.innerHTML = str
    setCells(o);
}

createGrid(order);