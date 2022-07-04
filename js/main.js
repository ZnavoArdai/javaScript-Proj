
function slaide(){

    const burger=document.querySelector('.burger');
    const navbar=document.querySelector('.navbar');
const li=document.querySelectorAll('.navbar li')
    burger.addEventListener("click",()=>{
        navbar.classList.toggle('navbar-active');
        li.forEach((list,index)=>{
            list.style.animation=`slid_li 3s ease forwards ${index/4}s `

        })

        
    }) 
}
slaide();