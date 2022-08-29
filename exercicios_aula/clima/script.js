var select = document.querySelector('Select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'Está um clima agradável lá fora!';
  } else if (choice === 'rainy') {
    para.textContent = 'A chuva está caindo lá';
  } else if (choice === 'snowing') {
    para.textContent = 'Está levando lá fora, vá fazer um boneco de neve';
  } else{
    para.textContent('');
  }
}