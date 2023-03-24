// ЧАСТЬ 1. ПОП-АП

const openPopUp = document.getElementById('openPopUp');
const popUp = document.getElementById('popUp')


// на кнопочку открытия вешаем метод адлистенер. он будет отслеживать нажаите по клику
// и выполнять функцию
// е нужно, т.к сама кнока (ссылка), при нажтии куда-то ведет. ф-я, чтобы это убрать
openPopUp.addEventListener('click', function(e){
  e.preventDefault();
  popUp.classList.add('active'); 
  // чтобы закрывалось окно при нажатии на черное
  popUp.addEventListener('click', function(){
    popUp.classList.remove('active');   
  }) 
  const closePopUp = document.getElementById('closePopUp');
  closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
  } )
})

// делаем то же самое для кнопочки закрытия попапа. сначала нахродим ее,
// отслеживаем нажатие и при нажатии убираем класс эктив

popUp.querySelector('.pop-up__body').addEventListener('click', function(event){  
  event.stopPropagation();
})

//  1. Здесь мы обратились к попапу и внутри него по классу нашли белое окно.
//  2. отслеживаем клик по нему. в функции евент - это событие мыши. клик.
//  3. сделали так чтобы это событие было только по белому окну, и информация о нем не передавалась родителю белого окна.
//  т.е. чтоб при клике на белое, программа не воспринимала это как клик на черное. 
//  есть такая странная осообенность js - передача события родителю





// ЧАСТЬ 2. СКРЫТЬ-ОТКРЫТЬ БЛОК

const openBlock = document.querySelector('#openBlock')
const hiddenBlock = document.querySelector('#hiddenBlock')
// querySelector подразумевает, что мы хотим найти только 1 элемент на странице, первый с таким селектором

openBlock.addEventListener('click', function(){  
  hiddenBlock.classList.toggle('content-hidden');
   if (hiddenBlock.classList.contains('content-hidden')) {
      openBlock.textContent = 'Открыть блок';
   }
   else {
    openBlock.textContent = 'Закрыть блок';
   }
})


// openBlock.textContent = 'что-то'; 
// обращаемся к переменной.находим ее текстовое содержимое. 
// его можно или просто вывести посмотреть. или = присвоить что-то другое