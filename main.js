//Start
noneAll();

//Show portfoliocontents div
function showPC() {
  noneAll();
  document.getElementById("portfoliocontents").style.display = "block";
}

//Show prooftables div
function showPT() {
  noneAll();
  document.getElementById("prooftables").style.display = "block";
}

//Show projectreflection div
function showPR() {
  noneAll();
  document.getElementById("projectreflection").style.display = "block";
}

//Show selfAssessment div
function showSA() {
  noneAll();
  document.getElementById("selfAssessment").style.display = "block";
}

//none all elements
function noneAll() {
  document.getElementById("portfoliocontents").style.display = "none";
  document.getElementById("prooftables").style.display = "none";
  document.getElementById("projectreflection").style.display = "none";
  document.getElementById("selfAssessment").style.display = "none";
}
