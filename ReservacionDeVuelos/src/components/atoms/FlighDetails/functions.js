const splitDate = date => {
  var arrayDate = date.split('-');
  return monthFilter(arrayDate[1]) + ' ' + arrayDate[2] + ', ' + arrayDate[0];
};

const monthFilter = month => {
  switch (month) {
    case '01':
      return 'January';
    case '02':
      return 'february';
    case '03':
      return 'March';
    case '04':
      return 'April';
    case '05':
      return 'May';
    case '06':
      return 'June';
    case '07':
      return 'July';
    case '08':
      return 'August';
    case '09':
      return 'September';
    case '10':
      return 'October';
    case '11':
      return 'November';
    case '12':
      return 'December';
  }
};

const functions = {splitDate};

export default functions;
