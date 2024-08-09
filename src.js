let numberOfSquares = 1;

const container = document.querySelector('.grid-container');
const btn = document.querySelector('.sButton');

createSquares();
addEventsToSquares();

btn.addEventListener("click", (e) => {
  do{
    numberOfSquares = parseInt(window.prompt("How many squares do you want?\n (Only numbers between 1 and 100 are allowed.", ""), 10);
  } while(isNaN(numberOfSquares) || numberOfSquares > 100 || numberOfSquares < 1);

  destroySquares();
  createSquares();
  addEventsToSquares();
});

function createSquares(){
  for (let i = 0; i < numberOfSquares; i++) {
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
    element.addEventListener('mouseover', (event)=> {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      event.target.style.backgroundColor = '#' + randomColor;
      if (!event.target.style.opacity) event.target.style.opacity = 1;
      event.target.style.opacity -= 0.1;
      console.log(event.target.style.opacity);
    });
  
  });
}



