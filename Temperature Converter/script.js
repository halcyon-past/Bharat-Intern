function convert() {
  let result = document.getElementById("result");
  let input = document.getElementById("input").value;
  let inputDEG = document.getElementById("inpDEG").value;
  let outputDEG = document.getElementById("outDEG").value;

  let c = 0;
  let f = 0;
  let k = 0;

  input = Number(input);

  if (inputDEG == 1) {
    c = input;
    f = (input * 9) / 5 + 32;
    k = input + 273.15;
  } else if (inputDEG == 2) {
    c = ((input - 32) * 5) / 9;
    f = input;
    k = ((input - 32) * 5) / 9 + 273.15;
  } else if (inputDEG == 3) {
    c = input - 273.15;
    f = ((input - 273.15) * 9) / 5 + 32;
    k = input;
  }

  if (outputDEG == 1) {
    result.innerHTML = c;
  } else if (outputDEG == 2) {
    result.innerHTML = f;
  } else if (outputDEG == 3) {
    result.innerHTML = k;
  }
}
