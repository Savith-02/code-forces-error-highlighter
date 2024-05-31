document.addEventListener("DOMContentLoaded", function () {
  const output1 = document.getElementById("output1");
  const output2 = document.getElementById("output2");
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");

  function syncScroll(event) {
    output2.scrollTop = output1.scrollTop;
  }
  function syncScroll(event) {
    input2.scrollTop = input1.scrollTop;
  }

  output1.addEventListener("scroll", syncScroll);
  output2.addEventListener("scroll", function () {
    output1.scrollTop = output2.scrollTop;
  });

  input1.addEventListener("scroll", syncScroll);
  input2.addEventListener("scroll", function () {
    input1.scrollTop = input2.scrollTop;
  });
});

function highlightLines() {
  // Get input values
  var inputText1 = document.getElementById("input1").value;
  var inputText2 = document.getElementById("input2").value;
  var inputText3 = document.getElementById("input3").value;

  var testCaseNumber = parseInt(
    document.getElementById("testCaseNumber").value
  );
  var inputTest = parseInt(document.getElementById("inputTest").value);
  var inputOffset = parseInt(document.getElementById("inputOffset").value);
  var outputTest = parseInt(document.getElementById("outputTest").value);

  // Split the input text into lines
  var lines1 = inputText1.split("\n");
  var lines2 = inputText2.split("\n");
  var lines3 = inputText3.split("\n");

  // Display the lines with highlighting
  var outputDiv1 = document.getElementById("output1");
  var outputDiv2 = document.getElementById("output2");
  var outputDiv3 = document.getElementById("output3");
  outputDiv1.innerHTML = ""; // Clear previous content
  outputDiv2.innerHTML = ""; // Clear previous content
  outputDiv3.innerHTML = ""; // Clear previous content

  for (var i = 0; i < Math.max(lines1.length, lines2.length); i++) {
    var span1 = document.createElement("span");
    var span2 = document.createElement("span");

    if (i < lines1.length) {
      span1.textContent = lines1[i] + "\n"; // Add newline character
      if (
        i >= (testCaseNumber - 1) * outputTest &&
        i < testCaseNumber * outputTest
      ) {
        span1.classList.add("highlight");
      }
      outputDiv1.appendChild(span1);
    }

    if (i < lines2.length) {
      span2.textContent = lines2[i] + "\n"; // Add newline character
      if (
        i >= (testCaseNumber - 1) * outputTest &&
        i < testCaseNumber * outputTest
      ) {
        span2.classList.add("highlight");
      }
      outputDiv2.appendChild(span2);
    }
  }
  for (var i = 0; i < lines3.length; i++) {
    var span3 = document.createElement("span");

    if (i < lines3.length) {
      span3.textContent = lines3[i] + "\n"; // Add newline character
      if (
        i + 1 >= inputOffset + (testCaseNumber - 1) * inputTest &&
        i + 1 < inputOffset + testCaseNumber * inputTest
      ) {
        span3.classList.add("highlight2");
      }
      outputDiv3.appendChild(span3);
    }
  }
}
