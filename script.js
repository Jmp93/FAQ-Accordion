const plusEl = document.querySelectorAll('.plus-el');

for (let i = 0; i < plusEl.length; i++) {
  plusEl[i].addEventListener('click', () => {
    const box = plusEl[i].closest('.box');
    const answer = box.querySelector('.answer');
    answer.classList.toggle('toggle');
  });
}
