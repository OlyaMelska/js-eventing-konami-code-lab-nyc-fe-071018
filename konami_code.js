const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const body = document.querySelector('body');
let tracker = 0;


function init() {
  // Write your JavaScript code inside the init() function
  body.addEventListener('keydown', (event) => {
    if(event.which === code[tracker]){
      console.log('success')
      tracker++;
      if(tracker === code.length){
        alert('you found it!')
      }
    }
    else{
      console.log('mistake')
      tracker = 0;
    }
  })
}

init()