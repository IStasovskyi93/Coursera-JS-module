let count = 0;
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById("countDisplay").innerText = count;
}

function checkCountValue() {
  if (count === 10) {
    alert("Ваш пост в Instagram набрал 10 подписчиков! Поздравляем!");
  } else if (count === 20) {
    alert("Ваш пост в Instagram набрал 20 подписчиков! Продолжайте в том же духе!");
  }
}

function resetCount(){
    count = 0;
    displayCount();
    alert('Folowers count is 0');
}