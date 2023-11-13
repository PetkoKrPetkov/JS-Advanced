window.addEventListener('load', solve);

function solve() {
  let firstNameEl = document.getElementById('first-name');
  let lastNameEl = document.getElementById('last-name');
  let ageEl = document.getElementById('age');
  let titleEl = document.getElementById('story-title');
  let genreEl = document.getElementById('genre');
  let storyEl = document.getElementById('story');
  let publishButtonEl = document.getElementById('form-btn');
  let previewUlEl = document.getElementById('preview-list');
  let main = document.getElementById('main');

  let name = '';
  let age = '';
  let title = '';
  let genre = '';
  let story = '';

  function makeInputEmpty() {
    firstNameEl.value = '';
    lastNameEl.value = '';
    ageEl.value = '';
    titleEl.value = '';
    genreEl.value = '';
    storyEl.value = '';
  }

  function storeInformationInUl() {
    name = `${firstNameEl.value} ${lastNameEl.value}`;
    age = ageEl.value;
    title = titleEl.value;
    genre = genreEl.value;
    story = storyEl.value;
    if (
      !firstNameEl.value ||
      !lastNameEl.value ||
      !age ||
      !genre ||
      !title ||
      !story ||
      Number(age) < 0
    ) {
      return;
    }
    let newLiEl = document.createElement('li');
    newLiEl.className = 'story-info';
    let newArticleEl = document.createElement('article');
    let h4El = document.createElement('h4');
    h4El.textContent = `Name: ${name}`;
    let newPAgeEl = document.createElement('p');
    newPAgeEl.textContent = age;
    let newPTitleEl = document.createElement('p');
    newPTitleEl.textContent = title;
    let newGenrePEl = document.createElement('p');
    newGenrePEl.textContent = genre;
    let newPStoryEl = document.createElement('p');
    newPStoryEl.textContent = story;
    newArticleEl.appendChild(h4El);
    newArticleEl.appendChild(newPAgeEl);
    newArticleEl.appendChild(newPTitleEl);
    newArticleEl.appendChild(newGenrePEl);
    newArticleEl.appendChild(newPStoryEl);
    newLiEl.appendChild(newArticleEl);
    let saveButton = document.createElement('button');
    saveButton.textContent = 'Save Story';
    saveButton.className = 'save-btn';
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit Story';
    editButton.className = 'edit-btn';
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Story';
    deleteButton.className = 'delete-btn';
    newLiEl.appendChild(saveButton);
    newLiEl.appendChild(editButton);
    newLiEl.appendChild(deleteButton);
    previewUlEl.appendChild(newLiEl);
    makeInputEmpty();
    publishButtonEl.disabled = true;

    saveButton.addEventListener('click', function saveFunction() {
      while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
      let h1Element = document.createElement('h1');
      h1Element.textContent = 'Your scary story is saved!';
      main.appendChild(h1Element);
    });
    editButton.addEventListener('click', function editFunction() {
      let [dontNeedet, first, last] = h4El.textContent.split(' ');
      firstNameEl.value = first;
      lastNameEl.value = last;
      ageEl.value = newPAgeEl.textContent;
      titleEl.value = newPTitleEl.textContent;
      genreEl.value = newGenrePEl.textContent;
      storyEl.value = newPStoryEl.textContent;
      while (newArticleEl.firstChild) {
        newArticleEl.removeChild(newArticleEl.firstChild);
      }
      while (newLiEl.firstChild) {
        newLiEl.removeChild(newLiEl.firstChild);
      }
      newLiEl.remove();
      publishButtonEl.disabled = false;
    });
    deleteButton.addEventListener('click', function deleteFunction() {
      while (newArticleEl.firstChild) {
        newArticleEl.removeChild(newArticleEl.firstChild);
      }
      while (newLiEl.firstChild) {
        newLiEl.removeChild(newLiEl.firstChild);
      }
      newLiEl.remove();
      publishButtonEl.disabled = false;
    });
  }
  publishButtonEl.addEventListener('click', storeInformationInUl);
}
