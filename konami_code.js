const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const body = document.querySelector('body');



function init() {
  // Write your JavaScript code inside the init() function
  body.addEventListener('keydown', (event) => {
    if(event.which === code[tracker]){
      console.log('success')
      tracker++;
    }
    else{
      console.log('mistake')
      tracker = 0;
    }
  })
}

init()