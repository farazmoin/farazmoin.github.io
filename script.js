let i = 0;
const text = 'Incident Responder';
const speed = 125;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('typeIt').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}