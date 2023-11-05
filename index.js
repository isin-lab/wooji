

// функция поворота логотипа
let angle = 0;
let rotationSpeed = 0.1; // Скорость поворота (градусы в секунду)
function rotateElement() {
  let block = document.getElementById("img_circle");
  angle += rotationSpeed;
  block.style.transform = "rotate(" + angle + "deg)";
}
setInterval(rotateElement, 10); // Вызов функции каждые 10 миллисекунд

//
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.container_header');
  const title = document.querySelector('.header_title');
  const hamburger = document.querySelector('.header_btn_hamburger');
  const checkbox = document.getElementById('hamburger_check');
  const links = document.querySelectorAll('.link');

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      title.style.color = 'white';
      header.style.backgroundColor = 'black'
      hamburger.style.backgroundImage = "url('./img/close.png')";
    } else {
      title.style.color = '';
      header.style.backgroundColor = '';
      hamburger.style.backgroundImage = '';
    }
  });

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
      if (checkbox.checked) {
        checkbox.checked = false;
        title.style.color = '';
        header.style.backgroundColor = '';
        hamburger.style.backgroundImage = '';
      } else {
        return;
      }
    });
  }

});

// modal

const modalOpen = document.querySelector('.modal_span');
const modal = document.getElementById('my_modal');
const modalClose = document.getElementById('close_modal');


modalOpen.addEventListener('click', function() {
  modal.style.display = 'flex';
});

modalClose.addEventListener('click', function() {
  modal.style.display = 'none';
});


//form
function showMessage() {
  alert("Сообщение отправлено. Мы свяжемся с вами скоро!");
  // Очищаем поля формы
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("city").value = "";
  // Дополнительные поля формы, если есть
  document.getElementById("connect").value = "";
  document.getElementById("activity").value = "";
  document.getElementById("required").value = "";
} 

//метрика




