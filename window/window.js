const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector
('.close-modal');
const btnOpenModal=document.querySelectorAll
('.show-modal');
console.log(btnOpenModal);
for(let i=0;i<btnOpenModal.length;i++)
btnOpenModal[i].addEventListener('click',function(){
    console.log('button clicked');
    modal.classList.remove('hidden');
})