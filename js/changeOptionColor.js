export default function changeOptionColor() {
  let options = document.querySelectorAll("label span");
  options[0].addEventListener("click", () => {
    if (options[0].className == "fail" || options[0].className == "") {
      options[1].className = "fail";
      options[2].className = "fail";
      options[3].className = "fail";
      options[0].className = "pass";
    } else if (options[0].classList == "pass") {
      options[1].className = "";
      options[2].className = "";
      options[3].className = "";
      options[0].className = "fail";
    }
  });
  options[1].addEventListener("click", () => {
    if (options[1].className == "fail" || options[1].className == "") {
      options[1].className = "pass";
      options[2].className = "fail";
      options[3].className = "fail";
      options[0].className = "fail";
    } else if (options[1].classList == "pass") {
      options[1].className = "fail";
      options[2].className = "";
      options[3].className = "";
      options[0].className = "";
    }
  });
  options[2].addEventListener("click", () => {
    if (options[2].className == "fail" || options[2].className == "") {
      options[2].className = "pass";
      options[1].className = "fail";
      options[3].className = "fail";
      options[0].className = "fail";
    } else if (options[2].classList == "pass") {
      options[2].className = "fail";
      options[1].className = "";
      options[3].className = "";
      options[0].className = "";
    }
  });
  options[3].addEventListener("click", () => {
    if (options[3].className == "fail" || options[2].className == "") {
      options[3].className = "pass";
      options[1].className = "fail";
      options[2].className = "fail";
      options[0].className = "fail";
    } else if (options[3].classList == "pass") {
      options[3].className = "fail";
      options[1].className = "";
      options[2].className = "";
      options[0].className = "";
    }
  });
}
