const sizeControl = document.getElementById('font-size-control');
const changedText = document.getElementById('text');


sizeControl.addEventListener('change', changingTextSize);

function changingTextSize(event) {
    sizeControl.range = event.currentTarget.value;
    changedText.style.fontSize = `${event.target.value}px`;
}