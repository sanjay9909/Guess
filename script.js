let random = Math.random()*100
random = Math.ceil(random)
console.log(Math.ceil(random))
let tries = 0;
document.querySelector('.tri_count').innerHTML = tries;
document.querySelector('.btn-1').addEventListener('click',()=>{
    let value = parseInt(document.querySelector('.number').value)
    tries = tries + 1 
    document.querySelector('.tri_count').innerHTML = tries;
    if(value===random){
        document.querySelector('.correct').innerHTML = document.querySelector('.correct').innerHTML +" "+ tries +" no.of tries"
        document.querySelector('.correct').style.display = 'block'
        document.querySelector('.low').style.display = 'none'
        document.querySelector('.high').style.display = 'none'
    }
    else if (value < random)
    {
        document.querySelector('.correct').style.display = 'none'
        document.querySelector('.low').style.display = 'none'
        document.querySelector('.high').style.display = 'block'
    }
    else if (value > random){
        document.querySelector('.correct').style.display = 'none'
        document.querySelector('.high').style.display = 'none'
        document.querySelector('.low').style.display = 'block'
    }
})
document.querySelector('.btn-2').addEventListener('click',(event)=>{
    window.location.reload()
})