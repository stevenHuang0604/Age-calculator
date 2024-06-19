const btn = document.querySelector('.btn');

const dayLabel = document.querySelector('.date__label--day');
const monthLabel = document.querySelector('.date__label--month');
const yearLabel = document.querySelector('.date__label--year');

const dayInput = document.querySelector('.date__input--day');
const monthInput = document.querySelector('.date__input--month');
const yearInput = document.querySelector('.date__input--year');

const dayEmpty = document.querySelector('.error__empty--day');
const monthEmpty = document.querySelector('.error__empty--month');
const yearEmpty = document.querySelector('.error__empty--year');
const formEmpty = document.querySelector('.error__empty--form');

const dayInvalid = document.querySelector('.error__invalid--day');
const monthInvalid = document.querySelector('.error__invalid--month');
const yearInvalid = document.querySelector('.error__invalid--year');

const dayShow = document.querySelector('.display__date--day');
const monthShow = document.querySelector('.display__date--month');
const yearShow = document.querySelector('.display__date--year');

const curDay = new Date().getDate();
const curMonth = new Date().getMonth() + 1;
const curYear = new Date().getFullYear();

let valid = false;

const Month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const reset = () => {
  dayLabel.classList.remove('date__label--error');
  dayInput.classList.remove('date__input--error');
  dayEmpty.classList.add('hidden');

  monthLabel.classList.remove('date__label--error');
  monthInput.classList.remove('date__input--error');
  monthEmpty.classList.add('hidden');

  yearLabel.classList.remove('date__label--error');
  yearInput.classList.remove('date__input--error');
  yearEmpty.classList.add('hidden');
};

btn.addEventListener('click', function (e) {
  const day = +dayInput.value;
  const month = +monthInput.value;
  const year = +yearInput.value;
  // check year
  if (!year || year > curYear) {
    yearLabel.classList.add('date__label--error');
    yearInput.classList.add('date__input--error');

    if (!year) {
      yearEmpty.classList.remove('hidden');
      yearInvalid.classList.add('hidden');
    } else if (year > curYear) {
      yearInvalid.classList.remove('hidden');
      yearEmpty.classList.add('hidden');
    }
  } else {
    yearLabel.classList.remove('date__label--error');
    yearInput.classList.remove('date__input--error');
    yearInvalid.classList.add('hidden');
    yearEmpty.classList.add('hidden');
  }

  // check month
  if (!month || month > 12 || month < 1) {
    monthLabel.classList.add('date__label--error');
    monthInput.classList.add('date__input--error');

    if (!month) {
      monthEmpty.classList.remove('hidden');
      monthInvalid.classList.add('hidden');
    } else if (month > 12 || month < 1) {
      monthInvalid.classList.remove('hidden');
      monthEmpty.classList.add('hidden');
    }
  } else {
    monthLabel.classList.remove('date__label--error');
    monthInput.classList.remove('date__input--error');
    monthInvalid.classList.add('hidden');
    monthEmpty.classList.add('hidden');
  }

  // check day
  if (!day || !month) {
    dayLabel.classList.add('date__label--error');
    dayInput.classList.add('date__input--error');

    if (!day) {
      dayEmpty.classList.remove('hidden');
      dayInvalid.classList.add('hidden');
    } else if (!month) {
      dayInvalid.classList.remove('hidden');
      dayEmpty.classList.add('hidden');
    }
  } else {
    dayLabel.classList.remove('date__label--error');
    dayInput.classList.remove('date__input--error');
    dayInvalid.classList.add('hidden');
    dayEmpty.classList.add('hidden');
  }

  if (year && month && day) {
    if (day < 1 || day > Month[month - 1]) {
      formEmpty.classList.remove('hidden');
    } else {
      valid = true;
    }
  }

  if (valid) {
    let yearsDiff, monthsDiff, daysDiff;

    yearsDiff = curMonth >= month ? curYear - year : curYear - year - 1;
    monthsDiff = curMonth >= month ? curMonth - month : curMonth + 12 - month;
    daysDiff = curDay > day ? curDay - day : Month[curMonth] - curDay + day;

    yearShow.textContent = yearsDiff;
    monthShow.textContent = monthsDiff;
    dayShow.textContent = daysDiff;
  }
});
