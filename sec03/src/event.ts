// const target = document.getElementById('username') as HTMLInputElement
//     target.addEventListener('input', (e) => {
//     console.log(e)
//     if(e.target instanceof HTMLInputElement){
//         console.log(e.target.value)
//     } else {

//     }
//     }) 


const target = document.getElementById('username') as HTMLInputElement
    target.addEventListener('input', (e) => {
    console.log((e.target as HTMLInputElement).value)
    })