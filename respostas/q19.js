function isPrime(num) {
  if (num < 2 || !Number.isInteger(num)) {
      return false;
  }
  let sqrtNum = Math.sqrt(num);
  for (let i = 2; i <= sqrtNum; i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}

export default isPrime;