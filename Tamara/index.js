function showValue() {
    var name = document.getElementById('name').value;
    document.getElementById('show-fname').innerHTML = name;
    if (document.getElementById("name").value.length < 5) {
        document.getElementById("show-fname").style.color = "red"; // this will change the div
      } else {
        document.getElementById("show-fname").style.color = "green";
      }
    var lname = document.getElementById('lname').value;
    document.getElementById('show-lname').innerHTML = lname;
    var age = document.getElementById('age').value;
    document.getElementById('show-age').innerHTML = age;
    var profession = document.getElementById('profession').value;
    document.getElementById('show-profession').innerHTML = profession;
    if (document.getElementById("profession").value === "IT") {
        document.getElementById("show-profession").style.backgroundColor = "gray"; // this will change the div
      } else {
        document.getElementById("show-profession").style.backgroundColor = "yellow";
      }
    // document.getElementById('hello').style.display = "none";
}

const showBtn = document.querySelector("#showBtn");
showBtn.addEventListener("click", showValue)
