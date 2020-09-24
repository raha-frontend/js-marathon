const firstTaskBtn = document.querySelector('.firstTask');
const secondTaskBtn = document.querySelector('.secondTask');

// #1
firstTaskBtn.addEventListener('click', function () {
  function getRow(firstRow, secondRow, value) {
    if (value.length > 1) return 'Вы ввели больше одного символа';

    let firstCountValue = 0;
    let secondCountValue = 0;

    for (let i = 0; i < firstRow.length; i++) {
      if (firstRow.charAt(i) !== value) continue;
      firstCountValue++;
    }

    for (let i = 0; i < secondRow.length; i++) {
      if (secondRow.charAt(i) !== value) continue;
      secondCountValue++;
    }

    return firstCountValue >= firstCountValue ? firstRow : secondRow;
  }

  const firstRow = 'мама мыла раму';
  const secondRow = 'собака друг человека';
  const value = prompt('Введите букву', 'а');

  alert(getRow(firstRow, secondRow, value));
});

// #2
secondTaskBtn.addEventListener('click', function () {
  function formattedPhone(value) {
    if (!value) {
      return 'Вы не ввели номер телефона';
    }

    if (value.length !== 11 || value.length !== 10 || value.length !== 9) {
      return 'Вы ввели некорректный номер телефона';
    }

    const phoneFirstChar = value.charAt(0);
    const clearSpaces = /[^\d]/g;
    const phonePattern = /(\d{3})(\d{3})(\d{2})(\d{2})/;

    let result;

    switch (phoneFirstChar) {
      case '+':
        result = value.slice(2)
          .replace(clearSpaces, '')
          .replace(phonePattern, '+7 ($1) $2-$3-$4');
        break;
      case '7':
        result = value.slice(1)
          .replace(clearSpaces, '')
          .replace(phonePattern, '+7 ($1) $2-$3-$4')
        break;
      case '8':
        result = value.slice(1)
          .replace(clearSpaces, '')
          .replace(phonePattern, '+7 ($1) $2-$3-$4')
        break;
      case '9':
        result = value
          .replace(clearSpaces, '')
          .replace(phonePattern, '+7 ($1) $2-$3-$4')
        break;
    }

    return result;
  }

  const value = prompt('Введите номер телефона для форматирования');

  alert(formattedPhone(value));
});
