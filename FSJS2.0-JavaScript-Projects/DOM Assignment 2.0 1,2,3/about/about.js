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

let main =  document.querySelector('.accordian-wrapper');
let divAdded = document.createElement('div');
divAdded.classList.add('accordian');
// divAdded.getElementsByTagName('h3').style.backgroundColor = "#dadaf8"
divAdded.innerHTML = `<h3>Skills</h3><p>I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the github.</p>`;
main.appendChild(divAdded);

divAdded.addEventListener('click', function(){
 let para = divAdded.getElementsByTagName('p');
 if(para[0].style.display === 'block'){
  para[0].style.display ='none'
 }
 else{
  para[0].style.display = 'block'
 }
})

// color change
for(let i = 0;i<accordian.length;i++){
    let elementHeading = accordian[i];
    elementHeading.style.backgroundColor = '#dadaf8';
  }

 let headingColor =  divAdded.getElementsByTagName('h3');
 headingColor[0].style.backgroundColor = '#dadaf8';