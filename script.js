let ybox = document.createElement('div');
let checker = document.createElement('button')
let natija = document.createElement('div')
document.body.appendChild(ybox);
document.body.appendChild(checker);
document.body.appendChild(natija);
let a = document.createElement('div');
let b = document.createElement('div');
let c = document.createElement('div');
ybox.appendChild(a);
ybox.appendChild(b);
ybox.appendChild(c);

let bir = Number(prompt("1-raqamni kiriting") );
let math = prompt("Tanlang:\n 1) + \n 2) - \n 3) * \n 4) /") ;
let iki =  Number( prompt("2-raqamni kiriting") );

let result;

if (math === '1') {
  result = bir + iki;
} else if (math === '2') {
  result = bir - iki;
} else if (math === '3') {
  result = bir * iki;
} else if (math === '4') {
  result = bir / iki;
} else {
  result = "Noto'g'ri amal tanlandi!";
}
document.body.style.display = 'flex';
document.body.style.paddingTop = '70px';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
checker.style.marginTop = '70px';
natija.style.marginTop = '70px';
ybox.style.width = '600px';
ybox.style.height = '150px';
ybox.style.backgroundColor = 'goldenrod';
ybox.style.padding = '20px';
ybox.style.fontSize = '30px';
ybox.style.display = 'flex';
ybox.style.justifyContent = 'space-around';
ybox.style.alignItems = 'center';
checker.style.width = ' 450px';
checker.style.height = '100px';
checker.style.backgroundColor = 'green';
checker.style.textAlign = 'center';
checker.innerText = "check";
checker.style.display = 'flex';
checker.style.justifyContent = 'center';
checker.style.alignItems = 'center';
checker.style.fontSize = '40px';
natija.style.fontSize = '40px';
natija.style.width = ' 500px';
natija.style.height = '125px';
natija.style.backgroundColor = 'red';
natija.style.textAlign = 'center';
natija.style.display = 'flex';
natija.style.justifyContent = 'center';
natija.style.alignItems = 'center';
let sign;
if (math === '1') {
    sign = b.innerText = "+" ;
  } else if  (math === '2') {
    sign = b.innerText = "-" ;
  } else if (math === '3') {
    sign = b.innerText = "*" ;
  } else if (math === '4') {
    sign = b.innerText = "/" ;
  } ;

  a.innerText = bir;
  c.innerText = iki;
a.style.width = '55px';
a.style.height = '55px';
a.style.display = 'flex';
a.style.justifyContent = 'center';
a.style.alignItems = 'center';
a.style.border = '2px black solid';

b.style.width = '55px';
b.style.height = '55px';
b.style.display = 'flex';
b.style.justifyContent = 'center';
b.style.alignItems = 'center';
b.style.border = '2px black solid';

c.style.width = '55px';
c.style.height = '55px';
c.style.display = 'flex';
c.style.justifyContent = 'center';
c.style.alignItems = 'center';
c.style.border = '2px black solid';

checker.id = "btn";

document.getElementById("btn").addEventListener('click' , () => {
natija.innerText = "Natija:" + result ;

})

