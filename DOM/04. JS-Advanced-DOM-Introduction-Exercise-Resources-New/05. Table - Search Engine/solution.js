function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);
  let inputEl = document.getElementById('searchField');
  let rowsElements = document.querySelectorAll('tbody tr');

  function onClick() {
    for (const row of rowsElements) {
      row.classList.remove('select');
      if (row.textContent.includes(inputEl.value)) {
        row.className = 'select';
      }
    }
    inputEl.value = '';
  }
}
