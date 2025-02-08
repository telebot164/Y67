let time = 60;
setInterval(() => {
  time -= 1;
  document.querySelector('.time').innerHTML = `Code will expired in ${time}seconds`;
  if (time === 0) {
  document.querySelector('.pass').innerHTML = `
  <div class="exp">Code is expired!</div><br><br><div class="start">to start the process again click
   <a style="color:blue;" href="telegram.html">here</a> </div>`;
  document.querySelector('.again').innerHTML = `
    
  `;
  document.querySelector('.exp').style.color = 'red';
  document.querySelector('.exp').style.fontSize = '17px';
  document.querySelector('.exp').style.marginTop = '90px';
  
}
}, 1000)
