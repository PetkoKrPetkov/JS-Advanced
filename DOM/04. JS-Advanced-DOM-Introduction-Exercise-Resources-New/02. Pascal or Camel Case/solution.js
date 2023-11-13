function solve() {
  let textEl = document.getElementById('text').value;
  let conventionEl = document.getElementById('naming-convention').value;
  let resultEl = document.getElementById('result');

  let result = '';

  if (conventionEl == 'Camel Case') {
    
    for(let i = 0; i < textEl.length; i++) {
      let current = textEl[i];
      if(current !== ' ') {
        result += current.toLowerCase();
      } else if(current === ' '){
        result += textEl[i + 1].toUpperCase();
        i ++;
      }
    }
  } else if (conventionEl == 'Pascal Case') {
    result += textEl[0].toUpperCase();
    for(let i = 1; i < textEl.length; i++) {
      let current = textEl[i];
      if(current !== ' ') {
        result += current.toLowerCase();
      } else if(current === ' '){
        result += textEl[i + 1].toUpperCase();
        i ++;
      }
    }
  } else {
    result = 'Error!'
  }
  
  resultEl.textContent = result;

}
