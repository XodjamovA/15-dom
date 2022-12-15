import { arr } from "./modules/data.js";
let togglers = document.querySelectorAll('span[data-table]')
let tbody = document.querySelector('tbody')
let table = document.querySelector('table')
let container = document.querySelector('.container')
let add2 = document.querySelector('.add2')
let add = document.querySelector('.add')
let add1 = document.querySelector('.add1')
let edit = document.querySelector('.edit')
let modal = document.querySelector('.modal')
let modal1 = document.querySelector('.modal_1')
let modal_bg = document.querySelector('.modal_bg')
let inp = document.querySelector('#_1')
let inp2 = document.querySelector('#_2')
let inp3 = document.querySelector('#_3')
let inp4 = document.querySelector('#_4')
let inp5 = document.querySelector('#_5')

let month = new Date().getMonth() + 1
let time = {
    date: month + "." + new Date().getDate() + "." + new Date().getFullYear(),
    hours: new Date().getHours() + ":" + new Date().getMinutes()
}

let b23 = "Не выполнено"

function reload(data, isTable) {
    tbody.innerHTML = ""

    for (let item of data) {
        if (isTable) {
            table.style.display = ""
            container.style.display = "none"
            tbody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.company.catchPharse}</td>
                <td>${item.company.bs}</td>
                <td>Не выполнено</td>
            </tr>
            `
        } else {
            table.style.display = "none"
            container.style.display = "grid"
            container.innerHTML += `
            <div class="item">
                <h1>${item.name}</h1>
                <p style="font-weight: 700; font-size: 14px; line-height: 17px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate magnam voluptatibus maiores
                    quod,
                    enim sequi minima labore id quae!
                </p>
                 <div>
                    <b>${time.hours}</b> | 
                    <b>${time.date}</b>
                </div>
            <span class="isDone" style="font-weight: 700; font-size: 14px; line-height: 17px; color:red;">${b23}</span>
            </div>
            `
            // container.span.onclick = () => {
            //     `<span class="isDone" style="font-weight: 700; font-size: 14px; line-height: 17px; color:#007FFF;">"В прогрессе"</span>`
            // }
        }

        container.onclick = () => {
            modal1.style.display = "block"
            modal_bg.style.display = "block"
            container.item = `
                    <div class="item">
                        <h1>${inp.value}</h1>
                        <p style="font-weight: 700; font-size: 14px; line-height: 17px;">${inp2.value}
                        </p>
                         <div>
                            <b>${inp3.value}</b> | 
                            <b>${inp4.value}</b>
                        </div>
                    <span class="isDone" style="font-weight: 700; font-size: 14px; line-height: 17px; color:red;">${inp5.value}</span>
            </div>`
        }
        console.log(item);
    }

}

togglers.forEach(btn => {
    btn.classList.remove('active')
    btn.onclick = () => {
        let isTable = JSON.parse(btn.getAttribute('data-table'))

        btn.classList.toggle('active')
        reload(arr, isTable)
    }
})

add2.onclick = () => {
    modal.style.display = "block"
    modal_bg.style.display = "block"
}

add.onclick = () => {
    modal.style.display = "none"
    modal_bg.style.display = "none"
    container.innerHTML += `
            <div class="item">
                <h1>${inp.value}</h1>
                <p style="font-weight: 700; font-size: 14px; line-height: 17px;">${inp2.value}
                </p>
                 <div>
                    <b>${inp3.value}</b> | 
                    <b>${inp4.value}</b>
                </div>
            <span class="isDone" style="font-weight: 700; font-size: 14px; line-height: 17px; color:red;">${inp5.value}</span>
            
        </div>`
        container.span.onclick = () => {
            
        }
}
add1.onclick = () => {
    modal1.style.display = "none"
    modal_bg.style.display = "none"
}

edit.onclick = () => {
    modal1.style.display = "none"
    modal_bg.style.display = "none"
    container.innerHTML += `
            <div class="item">
                <h1>${inp.value}</h1>
                <p style="font-weight: 700; font-size: 14px; line-height: 17px;">${inp2.value}
                </p>
                 <div>
                    <b>${inp3.value}</b> | 
                    <b>${inp4.value}</b>
                </div>
            <span class="isDone" style="font-weight: 700; font-size: 14px; line-height: 17px; color:red;">${inp5.value}</span>
        </div>`
}

modal_bg.onclick = () => {
    modal.style.display = "none"
    modal1.style.display = "none"
    modal_bg.style.display = "none"
}

