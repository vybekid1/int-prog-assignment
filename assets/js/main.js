const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const navMenu = document.querySelector(".navlinks");
const accessLink = document.querySelectorAll(".accesslink");



openMenu.addEventListener("click",()=>{
    closeMenu.classList.add("active");
    navMenu.classList.add("active");
    openMenu.classList.remove("active");
})
closeMenu.addEventListener("click",()=>{
    openMenu.classList.add("active");
    closeMenu.classList.remove("active");
    navMenu.classList.remove("active");
})

accessLink.forEach(link =>{
    link.addEventListener("click",()=>{
        openMenu.classList.add("active");
        closeMenu.classList.remove("active");
        navMenu.classList.remove("active");
    })
}
)

accessLink.forEach((item) => {
    item.onclick = () => {
         accessLink.forEach((item) => item.classList.remove("active"));
         item.classList.add("active");
    };
});

