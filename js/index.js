function onToggle(event) {
    if (event.target.open) {
      document.querySelectorAll(".accordion > details[open]").forEach((el) => {
        // Исключаем из перебора елемент который мы только что открыли
        if (el === event.target) {
          return;
        }
  
        // Закрываем все остальные елементы <details>
        el.open = false;
      });
    }
  }
  
  // Вешаем наблюдатель на все елементы <details> внутри акордиона
  document
    .querySelectorAll(".accordion > details")
    .forEach((el) => el.addEventListener("toggle", onToggle));
  