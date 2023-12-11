/*
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

const titleEl = document.querySelector('.title');
console.log(titleEl.innerHTML);
titleEl.innerHTML = "<a href='https://google.com'>Link to Google</a>";
titleEl.innerHTML = '';

/*
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */

const container = document.querySelector('.container');
const pEl =
  '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero assumenda atque placeat autem ut consequatur quis deleniti provident tempora perspiciatis!</p>';

container.insertAdjacentHTML('beforeend', pEl);
