window.addEventListener('load', solve);

function solve() {
  let inputElements = document.querySelectorAll(
    '.container-text input, .container-text select'
  );
  let inputLabels = document.querySelectorAll('.container-text label');
  let nextButtonEl = document.getElementById('next-btn');
  let inputArray = Array.from(inputElements);
  let ulElement = document.querySelector('.info-list');
  let ulConfirm = document.querySelector('.confirm-list');
  let imageElement = document.getElementById('complete-img');
  let pElement = document.getElementById('complete-text');

  nextButtonEl.addEventListener('click', (e) => {
    e.preventDefault();
    let newLi = document.createElement('li');
    newLi.classList.add('part-content');
    let firstArticle = document.createElement('article');
    let secondArticle = document.createElement('article');
    let invalidYears =
      Number(inputArray[1].value) < 1980 || Number(inputArray[1].value) > 2023;
    for (let i = 0; i < inputArray.length; i++) {
      const lineInput = inputArray[i].value;
      const lineLabel = inputLabels[i].textContent;

      if (!lineInput || invalidYears) {
        return;
      }
      let newPEl = document.createElement('p');
      newPEl.textContent = `${lineLabel} ${lineInput}`;
      firstArticle.appendChild(newPEl);
    }
    newLi.appendChild(firstArticle);
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    let continueButton = document.createElement('button');
    continueButton.textContent = 'Continue';
    continueButton.classList.add('continue-btn');
    secondArticle.appendChild(editButton);
    secondArticle.appendChild(continueButton);
    newLi.appendChild(secondArticle);
    ulElement.appendChild(newLi);
    imageElement.style.visibility = 'hidden';
    nextButtonEl.disabled = true;
    pElement.textContent = '';
    inputArray.forEach((x) => {
      x.value = '';
    });
    editButton.addEventListener('click', (e) => {
      let infoElements = document.querySelectorAll('.info-list p');
      let arrOfPEl = Array.from(infoElements);

      for (let i = 0; i < arrOfPEl.length; i++) {
        const elementP = arrOfPEl[i].textContent.split(': ');
        const inputValue = elementP[1];
        inputArray[i].value = inputValue;
      }
      newLi.remove();
      nextButtonEl.disabled = false;
    });
    continueButton.addEventListener('click', (e) => {
        ulConfirm.appendChild(newLi);
        editButton.remove();
        continueButton.remove();
        let confirmButton = document.createElement('button');
        confirmButton.textContent = 'Confirm';
        confirmButton.classList.add('confirm-btn');
        let cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.classList.add('cancel-btn');
        secondArticle.appendChild(confirmButton);
        secondArticle.appendChild(cancelButton);


        confirmButton.addEventListener('click',  function confirm() {
                newLi.remove();
                nextButtonEl.disabled = false;
                imageElement.style.visibility = 'visible';
                pElement.textContent = 'Part is Ordered!';
        });
       
        cancelButton.addEventListener('click', function cancel(){
                newLi.remove();
                nextButtonEl.disabled = false;
        })
        
    })
  });
}
