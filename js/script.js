const openPopUp = document.getElementById('openPopUp');
const closePopUp = document.getElementById('closePopUp');
const popUp = document.getElementById('popUp')


// на кнопочку открытия вешаем метод адлистенер. он будет отслеживать нажаите по клику
// и выполнять функцию
// е нужно, т.к сама кнока (ссылка), при нажтии куда-то ведет. ф-я, чтобы это убрать
openPopUp.addEventListener('click', function(e){
  e.preventDefault();
  popUp.classList.add('active');
  // это мы повесили класс на сам попап
})

// теперь делаем то же самое для кнопочки закрытия попапа
// отслеживаем нажатие и при нажатии убираем класс эктив
closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
} )