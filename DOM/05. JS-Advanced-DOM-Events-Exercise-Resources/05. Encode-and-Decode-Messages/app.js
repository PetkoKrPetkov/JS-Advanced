function encodeAndDecodeMessages() {

    const [encodeText, decodeText] = document.querySelectorAll('textarea');
    const [sendButton, readButton] = document.querySelectorAll('button');

    sendButton.addEventListener('click', encodeAndSend);
    readButton.addEventListener('click', decodeAndRead);

    function encodeAndSend(e) {
        let text = encodeText.value;
        let result = '';

        for (const letter of text) {
            let letterToAscii = letter.charCodeAt();
            result += String.fromCharCode(letterToAscii + 1);
        }

        decodeText.value = result;
        encodeText.value = '';
    }

    function decodeAndRead(e) {
        let text = decodeText.value;
        let result = '';

        for (const letter of text) {
            let letterToAscii = letter.charCodeAt();
            result += String.fromCharCode(letterToAscii - 1);
        }

        decodeText.value = result;
    }
}