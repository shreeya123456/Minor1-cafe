
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

document.body.classList.toggle("dark");

})

const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

openBtn.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
