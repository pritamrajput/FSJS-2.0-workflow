let accordian = document.querySelectorAll(".accordian h3");
console.log(accordian);
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// let ulList = document.querySelector('ul');
// console.log(ulList);
// let listInside = ulList.getElementsByTagName('li');
// console.log(listInside);
// listInside[2].textContent = "Projects"
// for(let i = 0;i<accordian.length;i++){
//   let elementHeading = accordian[i];
//   elementHeading.style.backgroundColor = '#dadaf8';
// }
// for(let i = 2 ; i<accordian.length;i++){
//   let nextElement = accordian[i].nextElementSibling
//   nextElement.style.display = 'block';
// }
