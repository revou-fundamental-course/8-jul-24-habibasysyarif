const gender = document.getElementsByName("gender");
const beratBadan = document.getElementById("input-berat-badan");
const tinggiBadan = document.getElementById("input-tinggi-badan");
const usia = document.getElementById("input-usia");
const countBtn = document.getElementById("form-count");
const resetBtn = document.getElementById("form-reset");
const result = document.querySelector("#count-result h2");
const resultInfo = document.querySelector("#count-result h3");
const resultDesc = document.querySelector("#count-result p");
const resultSum = document.getElementById("result-summary");

countBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //   Count
  const bmi = Math.round((beratBadan.value / (tinggiBadan.value * tinggiBadan.value)) * 10000);

  // Show Result Information

  if (bmi < 18.5) {
    resultInfo.innerText = "Kekurangan Berat Badan";
    resultDesc.innerText = "Anda kekurangan berat badan!";
    resultSum.innerText = `
    Hasil BMI dibawah 18
    
   Anda berada dalam kategori kekurangan berat badan. Cara terbaik untuk menurunkan berat badan adalah dengan memperbanyak porsi makan, minum obat cacing, dan tidur yang cukup.

   Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.
   BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.
 `;
  } else if (bmi >= 18.5 && bmi < 25.0) {
    resultInfo.innerText = "Normal (Ideal)";
    resultDesc.innerText = "Anda memiliki berat badan yang Normal";
    resultSum.innerText = `
        Hasil BMI di antara 18 dan 25

        Anda berada dalam kategori normal. Tetap pertahankan berat badan anda dengan cara menjaga pola makan dan olahraga teratur.
    `;
  } else if (bmi >= 25.0 && bmi < 30) {
    resultInfo.innerText = "Berat Badan Lebih";
    resultDesc.innerText = "Anda memiliki berat badan berlebih!";
    resultSum.innerText = `
    Hasil BMI di antara 25 dan 30

    Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.
    
    Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.
    `;
  } else if (bmi >= 30) {
    resultInfo.innerText = "Kegemukan";
    resultDesc.innerText = "Anda mengalami Obesitas!";
    resultSum.innerText = `
    Hasil BMI diatas 30

    Anda berada dalam kategori obesitas atau kelebihan berat badan. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.

    Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.
    `;
  }

  // Show the result
  result.innerText = bmi;

  // If form is invalid
  if (beratBadan.value == "" || tinggiBadan.value == "" || usia.value == "") {
    result.innerText = 0;
    resultInfo.innerText = "Hasil";
    resultDesc.innerText = "";
    resultSum.innerText = "";

    alert("Mohon isi dengan data yang valid!");
  }
});


resetBtn.addEventListener("click", (e) => {
  e.preventDefault();

  beratBadan.value = "";
  tinggiBadan.value = "";
  usia.value = "";

  resultInfo.innerText = "Hasil";
  result.innerText = 0;
  resultDesc.innerText = "";
  resultSum.innerText = "";
});
