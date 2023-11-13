window.addEventListener('load', solve);

function solve() {
  let nextBUttonEl = document.getElementById('next-btn');
  let inputElements = document.querySelectorAll(
    '.container-text input, .container-text select'
  );
  let labelElements = document.querySelectorAll('.container-text label');
  let previewUlElement = document.querySelector('.class-info');
  let confirmUlElement = document.querySelector('.confirm-class');
  let divElMain = document.getElementById('main');
  let bodyEl = document.getElementById('body');

  nextBUttonEl.addEventListener('click', (e) => {
    e.preventDefault();
    let newLiEl = document.createElement('li');
    newLiEl.classList.add('info-item');

    let articleElement = document.createElement('article');
    articleElement.classList.add('personal-info');

    newLiEl.appendChild(articleElement);

    for (let index = 0; index < inputElements.length; index++) {
      // const elementLabel = labelElements[index].getAttribute('for');
      const currLineInput = inputElements[index].value;
      if (!currLineInput) {
        return;
      }
      let newPEl = document.createElement('p');
      newPEl.textContent = currLineInput;
      articleElement.appendChild(newPEl);
      inputElements[index].value = '';
    }

    previewUlElement.appendChild(newLiEl);
    nextBUttonEl.disabled = true;

    let secondArticleElement = document.createElement('article');

    let newEditButton = document.createElement('button');
    newEditButton.classList.add('edit-btn');
    newEditButton.textContent = 'Edit';
    secondArticleElement.appendChild(newEditButton);

    let newContinueButton = document.createElement('button');
    newContinueButton.classList.add('continue-btn');
    newContinueButton.textContent = 'Continue';
    secondArticleElement.appendChild(newContinueButton);

    newLiEl.appendChild(secondArticleElement);

    let ulLinesElements = document.querySelectorAll('.personal-info p');

    newEditButton.addEventListener('click', (e) => {
      for (let index = 0; index < ulLinesElements.length; index++) {
        const text = ulLinesElements[index].textContent;
        inputElements[index].value = text;
      }
      nextBUttonEl.disabled = false;
      newLiEl.remove();
    });
    newContinueButton.addEventListener('click', (e) => {
      confirmUlElement.appendChild(newLiEl);
      let cancelButton = newEditButton;
      cancelButton.textContent = 'Cancel';
      cancelButton.classList.remove('edit-btn');
      cancelButton.classList.add('cancel-btn');
      let confirmButton = newContinueButton;
      confirmButton.textContent = 'Confirm';
      confirmButton.classList.remove('continue-btn');
      confirmButton.classList.add('confirm-btn');

      confirmButton.addEventListener('click', (e) => {
        divElMain.remove();
        let h1El = document.createElement('h1');
        h1El.id = 'thank-you';
        h1El.textContent =
          'Thank you for scheduling your appointment, we look forward to seeing you!';
        bodyEl.appendChild(h1El);
  
        let buttonEl = document.createElement('button');
        buttonEl.id = 'done-btn';
        buttonEl.textContent = 'Done';
        bodyEl.appendChild(buttonEl);

        buttonEl.addEventListener('click', (e) => {
            location.reload();
        })
      });
    });

  });
}
