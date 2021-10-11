const schemeSvg=document.querySelector(".scheme-svg");
const totalPriceTag=document.querySelector(".price-total");
let cost=800;
let totalPrice=0;
let seatsSelected=0;
schemeSvg.addEventListener('click',(event)=>{
    // console.log(event.target);
    if(!event.target.classList.contains("booked")){
        event.target.classList.toggle("active");
        seatsSelected =schemeSvg.querySelectorAll(".active").length;
        totalPrice=seatsSelected*cost;
        totalPriceTag.textContent=totalPrice;
    }
    
})