window.addEventListener('load', solution);

function solution() {
  const submitBtnEl =  document.getElementById('submitBTN');
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');
  const nameElelemnt = document.getElementById('fname');
  const emailElelemnt = document.getElementById('email');
  const phoneNumElelemnt = document.getElementById('phone');
  const addressElelemnt = document.getElementById('address');
  const postalCodeElelemnt = document.getElementById('code');
  const ulElement = document.getElementById('infoPreview');

  submitBtnEl.disabled = false;
  editBtn.disabled = true;
  continueBtn.disabled = true;

  let name = '';
  let email = '';
  let phoneNum = '';
  let addres = '';
  let postal = '';
  
  submitBtnEl.addEventListener('click', (e) => {

    name = nameElelemnt.value;
    email = emailElelemnt.value;
    phoneNum = phoneNumElelemnt.value;
    addres = addressElelemnt.value;
    postal = postalCodeElelemnt.value;

    if(!name || !email) {
      return;
    }

    let liNameEl = document.createElement('li');
    liNameEl.textContent = `Full Name: ${name}`;
    
    let liEmailEl = document.createElement('li');
    liEmailEl.textContent = `Email: ${email}`;
    
    let liPhoneEl = document.createElement('li');
    liPhoneEl.textContent = `Phone Number: ${phoneNum}`;
    
    let liAddressEl = document.createElement('li');
    liAddressEl.textContent = `Address: ${addres}`;
    
    let liPostalCodeEl = document.createElement('li');
    liPostalCodeEl.textContent = `Postal Code: ${postal}`;

    ulElement.appendChild(liNameEl);
    ulElement.appendChild(liEmailEl);
    ulElement.appendChild(liPhoneEl);
    ulElement.appendChild(liAddressEl);
    ulElement.appendChild(liPostalCodeEl);
    
    e.target.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    nameElelemnt.value = '';
    emailElelemnt.value = '';
    phoneNumElelemnt.value = '';
    addressElelemnt.value = '';
    postalCodeElelemnt.value = '';

    editBtn.addEventListener('click', (e) => {
      nameElelemnt.value = name;
      emailElelemnt.value = email;
      phoneNumElelemnt.value = phoneNum;
      addressElelemnt.value = addres;
      postalCodeElelemnt.value = postal;
  
      while(ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
      }
  
      submitBtnEl.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
    })
  
    continueBtn.addEventListener('click', (e) => {
      let blockEl = document.getElementById('block');
      while(blockEl.firstChild) {
        blockEl.removeChild(blockEl.firstChild);
      }
      let newEl = document.createElement('h3');
      newEl.textContent = "Thank you for your reservation!";
      blockEl.appendChild(newEl);
    })
  })

 

}
