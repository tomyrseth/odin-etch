let selection = 1; //Default value
let containerWidth = 960;


const container = document.querySelector('.grid-container');
const btn = document.querySelector('.sButton');

createSquares();
addEventsToSquares();

btn.addEventListener("click", (e) => {
  do{
    selection = parseInt(window.prompt("How many squares do you want per side?\n (Only numbers from 1 and to 100 are allowed.", ""), 10);
  } while(isNaN(selection) || selection > 100 || selection < 1);

  destroySquares();
  createSquares();
  addEventsToSquares();
});

function createSquares(){
  for (let i = 0; i < selection*selection; i++) {
    let div = document.createElement('div')
    div.className = 'div';
    container.appendChild(div);
  }
}

function destroySquares(){
  let squares = selectAllSquares();
  squares.forEach((el) => {
    el.remove();
  });
}

function selectAllSquares() {
  let squares = document.querySelectorAll('.div');
  return squares;
}

function addEventsToSquares() {
  document.querySelectorAll('.div').forEach(element => {

    element.style.flexBasis = containerWidth/selection+'px';
    element.style.height = containerWidth/selection+'px';
    console.log(element.style.flexBasis);

    element.addEventListener('mouseover', (event)=> {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      event.target.style.backgroundColor = '#' + randomColor;
      if (!event.target.style.opacity) event.target.style.opacity = 1;
        event.target.style.opacity -= 0.1;
    });
  
  });
}



