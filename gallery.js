const modal = document.querySelector("#myModal");

const img = document.querySelectorAll(".myImg");

const modalImg = document.querySelector("#img01");

// let close = document.querySelector(".close");

const caption = document.querySelector('#caption')


for (let i = 0; i < img.length; i++) {
img[i].onclick = function() {
  modal.style.display = "block"
  modalImg.src = this.src;
  caption.innerHTML = this.alt;
}
}



// close.onclick = function () {
//   modal.style.display = "none"
// }


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}