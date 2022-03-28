const entities = [
    {
      text: 'Первый дизайн',
      img: '../images/design1.png'
    },
    {
      text: 'Второй дизайн',
      img: '../images/design2.png'
    },
    {
      text: 'Третий дизайн',
      img: '../images/design3.png'
    }
]
  
const img = document.querySelector('#design_img');

const design_nav1 = document.querySelector('#design_nav1');
const design_nav2 = document.querySelector('#design_nav2');
const design_nav3 = document.querySelector('#design_nav3');

const btn_nav1 = document.querySelector('#button_nav1');
const btn_nav2 = document.querySelector('#button_nav2');
const btn_nav3 = document.querySelector('#button_nav3');

const btn_nav = document.querySelectorAll('.rectangle1');
const design_nav = document.querySelectorAll('.main-nav_item');
console.log(design_nav)
console.log(btn_nav)

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
console.log(img)

const setEntity = (index) => {
  img.src = `../images/design${index}.png`;
  switch(index){
    case 1:
      design_nav1.classList.add('active');
      design_nav2.classList.remove('active');
      design_nav3.classList.remove('active');

      btn_nav1.classList.add('active_btn');
      btn_nav2.classList.remove('active_btn');
      btn_nav3.classList.remove('active_btn');
      break;
    case 2:
      design_nav2.classList.add('active');
      design_nav1.classList.remove('active');
      design_nav3.classList.remove('active');

      btn_nav2.classList.add('active_btn');
      btn_nav1.classList.remove('active_btn');
      btn_nav3.classList.remove('active_btn');
      break
    case 3:
      design_nav3.classList.add('active');
      design_nav1.classList.remove('active');
      design_nav2.classList.remove('active');

      btn_nav3.classList.add('active_btn');
      btn_nav1.classList.remove('active_btn');
      btn_nav2.classList.remove('active_btn');
  }
}


let currentIndex = 1;

design_nav[0].addEventListener('click', () =>{
  setEntity(1);
  currentIndex = 1;
})

design_nav[1].addEventListener('click', () =>{
  setEntity(2);
  currentIndex = 2;
})

design_nav[2].addEventListener('click', () =>{
  setEntity(3);
  currentIndex = 3;
})

btn_nav[0].addEventListener('click', () =>{
  setEntity(1);
  currentIndex = 1;
})

btn_nav[1].addEventListener('click', () =>{
  setEntity(2);
  currentIndex = 2;
})

btn_nav[2].addEventListener('click', () =>{
  setEntity(3);
  currentIndex = 3;
})

next.addEventListener('click', () => {
  if(currentIndex + 1 >= 4){
    setEntity(1);
    currentIndex = 1;
  } else{
    setEntity(currentIndex + 1);
    currentIndex += 1;
  }
})

prev.addEventListener('click', () => {
  if(currentIndex - 1 <= 0){
    setEntity(3);
    currentIndex = 3;
  } else{
    setEntity(currentIndex - 1);
    currentIndex -= 1;
  }
  
})

