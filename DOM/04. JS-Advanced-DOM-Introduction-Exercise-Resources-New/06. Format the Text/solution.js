function solve() {
  let inputElValue = document.getElementById('input').value;
  let outputEl = document.getElementById('output');
  
  let inputArr = inputElValue.split('.').filter(x => x !== '');
  let text = '';
  let counter = 0;

  while(inputArr.length > 0) {
    
    counter++;
    let current = inputArr.shift();
    text += current + '.';
    if(counter % 3 == 0 || inputArr.length == 0) {
      let p = document.createElement('p');
      p.textContent = text;
      outputEl.appendChild(p);
      text = '';
    }
  }

}