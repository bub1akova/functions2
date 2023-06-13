import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
function getFreeDomainsCount(emails) {
  return emails.reduce((account, email) => {
    let mail = email.split('@')[1]
    if (freeEmailDomains.indexOf(mail) != -1) {
      account[mail] ? account[mail] = account[mail] + 1 : account[mail] = 1
    }
    return account
  }, {})
}
export default getFreeDomainsCount
// END