const textInput = document.getElementById("name-input");
const output = document.getElementById("name-output");
console.log(output);

textInput.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous';
  });

  

