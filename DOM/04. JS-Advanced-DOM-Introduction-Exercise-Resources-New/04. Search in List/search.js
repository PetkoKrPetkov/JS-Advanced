function search() {
   let liElements = document.querySelectorAll('#towns li');
   let inputEl = document.getElementById('searchText').value;
   let resultEl = document.getElementById('result');
   let counter = 0;
   let arrElements = Array.from(liElements);
   
   for (const li of arrElements) {
      if(li.textContent.includes(inputEl)) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         counter++;
      } else {
         li.style.fontWeigth = 'normal';
         li.style.textDecoration = 'none';
      }
   }

   resultEl.textContent = `${counter} matches found`;
 
}
