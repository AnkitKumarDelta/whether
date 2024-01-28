const p1=document.querySelector('.para1');
const p2=document.querySelector('.para2');
const p3=document.querySelector('.para3');
const input=document.querySelector('.inp');
const button=document.querySelector('.btn');
const h2=document.querySelector('h2');

const city = 'Faridabad';
 whether= "58cde1df050878bbf1786823e13b1f10";

//const url = `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&appid=${apiKey}`;

button.addEventListener('click',async()=>{
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' +input.value+ '&appid=' +whether);
    const data = await response.json();
    h2.innerText=` Weather of ${data['name']}`;
    p1.innerText=`Cloud Condition ->  ${data['weather']['0']['description']}`;
    p2.innerText=`Temperature(°F) ->  ${data['main']['temp']}`;
    p3.innerText=` Wind Speed(Km/h) ->  ${data['wind']['speed']}`;
});
 
   


