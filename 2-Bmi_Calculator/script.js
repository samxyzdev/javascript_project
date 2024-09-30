const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a child height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a child weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `Under Weight (BMI: ${bmi})`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `Normal Range (BMI: ${bmi})`;
    } else {
      results.innerHTML = `Overweight (BMI: ${bmi})`;
    }
  }
});

const randomNumber = parseInt(Math.random() * 100 + 1);
