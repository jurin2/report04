 // photo
 let photo = document.getElementsByClassName("photo");
 // Modal
 let modals = document.getElementsByClassName("modal");
 // Modal close
 let close = document.getElementsByClassName("close");
 let funcs = [];
 
 // Modal 함수
 function Modal(num) {
     return function() {
         // 해당 클래스의 내용을 클릭하면 Modal을 띄운다.
         photo[num].addEventListener('click',function(){
             modals[num].style.display = "block";
             console.log(num);   
         });
     
         // close를 클릭하면 Modal이 닫힌다.
         close[num].addEventListener('click',function(){
             modals[num].style.display = "none";
         }) 
     };
 }
 
 // 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의
 for(let idx = 0; idx < photo.length; idx++) {
     funcs[idx] = Modal(idx);
 }
 
 // 원하는 Modal 수만큼 funcs 함수를 호출합니다.
 for(let idx2 = 0; idx2 < photo.length; idx2++) {
     funcs[idx2]();
 }