var modalBtns = document.querySelectorAll('.modal-btn');
var modalBgs = document.querySelectorAll('.modal-bg');
var modalCloses = document.querySelectorAll('.modal-close');

for (let modalBtn of modalBtns) {
  modalBtn.addEventListener('click',function(){
    let targetModal = document.getElementById(this.dataset.target);
    targetModal.classList.add('bg-active');
  });
}

for (let modalClose of modalCloses) {
  modalClose.addEventListener('click',function(){
    for (let modalBg of modalBgs) {
      modalBg.classList.remove('bg-active')
    }
  });
}