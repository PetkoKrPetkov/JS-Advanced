function toggle() {
    let button = document.querySelector('span.button');
    let text = document.querySelector('div#extra');

    if(button.textContent === 'More') {
        button.textContent = 'Less';
        text.style.display = 'block';
    } else {
        button.textContent = 'More';
        text.style.display = 'none';
    }
    // console.log(button.textContent);
}