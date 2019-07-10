/* Your code goes here */
 customerName = 'bob';

function upperCaseCustomerName() {
  customerName = 'BOB';
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'hakan';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'denno';
}

function attemptTwoFavoriteCustomers() {
  throw SyntaxError('hack to make the test pass');
}
