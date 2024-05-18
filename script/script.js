let btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let heightCm = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (heightCm == "" || weight == "") {
    alert("Please fill out the input fields!");
    return;
  }
 
  let heightM = heightCm / (100) * 2;

  let BMI = weight / heightM ;

  BMI = BMI.toFixed(2)

  document.querySelector('#result').innerHTML = BMI

  let status = "";

  if (BMI < 18.5){
    status = 'Underweight'
  }
  if (BMI >= 18.5 && BMI < 25){
    status = 'Normal Weight'
  }
  if (BMI >= 25 && BMI < 30){
    status = 'Overweight'
  }
  if (BMI >= 30){
    status = 'Obese'
  }

  document.querySelector('.comment').innerHTML = `You are   <span id='comment'>${status}</span>`;
});


