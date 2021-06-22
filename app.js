'use strict';

let form = document.getElementById('form');
let headerAry=['Student Name', 'Student Grade' , 'Course', 'Status'];

let parent = document.getElementById('table');

let data=[];

function Data(studentName , courseName) {

  this.studentName=studentName;
  this.grade=randomNumber();
  this.courseName=courseName;

  data.push(this);

}
// let number=randomNumber();

// console.log(this.grade);

function headerRender() {

  let tr = document.createElement('tr');
  parent.appendChild(tr);
  for (let i = 0; i < headerAry.length; i++) {
    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent=headerAry[i];

  }


}

form.addEventListener('submit', submitter);


function submitter(event) {
  event.preventDefault();
  let itemName = event.target.studentName.value;
  let itemCourse = event.target.courseName.value;
  let newItem = new Data(itemName,itemCourse);
  localStorage.setItem('school',JSON.stringify(data));
  newItem.render();

}


Data.prototype.render = function(){

  let tr1= document.createElement('tr');

  parent.appendChild(tr1);

  let td1 = document.createElement('td');


  tr1.appendChild(td1);

  td1.textContent= this.studentName;

  //   let tr1= document.createElement('tr');

  //   parent.appendChild(tr2);

  let td2 = document.createElement('td');


  tr1.appendChild(td2);

  td2.textContent= randomNumber();

  //   console.log(this.grade);

  let td3 = document.createElement('td');

  tr1.appendChild(td3);

  td3.textContent=this.courseName;
  if (td2.textContent>50) {

    let td4 = document.createElement('td');
    tr1.appendChild(td4);

    td4.textContent='Pass';


  }else {

    let td5 = document.createElement('td');
    tr1.appendChild(td5);
    td5.textContent='Fail';
  }



};


function keepItems() {

  if (localStorage.getItem('school')) {

    data= JSON.parse(localStorage.getItem('school'));


  }
}


function renderAgain() {

  for (let i = 0; i < data.length; i++) {

    let tr1= document.createElement('tr');

    parent.appendChild(tr1);

    let td1 = document.createElement('td');


    tr1.appendChild(td1);

    td1.textContent= data[i].studentName;


    //   let tr1= document.createElement('tr');

    //   parent.appendChild(tr2);

    let td2 = document.createElement('td');


    tr1.appendChild(td2);

    td2.textContent=randomNumber();

    console.log(data[i].number);



    let td3 = document.createElement('td');



    tr1.appendChild(td3);

    td3.textContent= data[i].courseName;

    console.log(data[i].courseName);

    if (td2.textContent>50) {

      let td4 = document.createElement('td');
      tr1.appendChild(td4);

      td4.textContent='Pass';


    }else {

      let td5 = document.createElement('td');
      tr1.appendChild(td5);
      td5.textContent='Fail';
    }
  }

}



function randomNumber() {

  return Math.floor((Math.random() * 100) + 0);

}
console.log(randomNumber());




headerRender();
keepItems();
renderAgain();

