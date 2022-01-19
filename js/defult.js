let btnNav = document.getElementById('btn-nav');
btnNav.addEventListener('click',function(){
    let _header = document.querySelector('.header');
    let _nav = document.querySelector('.nav');
    _header.classList.toggle('show-nav');
    _nav.classList.toggle('show-nav');
})

let photo = document.getElementsByClassName('photo');
let modals = document.getElementsByClassName('modal');
let close = document.getElementsByClassName('close');
let funcs = [];

function Modal(num) {
    return function(){
        photo[num].addEventListener('click',function(){
            modals[num].style.display = 'block';
            console.log(num);
        })
        close[num].addEventListener('click',function(){
            modals[num].style.display = 'none';
        })
    };
}
// 모달 수만큼 함수를 호출해서 funcs에 저장
for(let idx=0; idx<photo.length; idx++){
    funcs[idx] = Modal(idx);
}
// 모달 수만큼 funcs에 저장된 함수를 호출
for(let idx2=0; idx2<photo.length; idx2++){
    funcs[idx2]();
}
