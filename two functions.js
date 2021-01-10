function foo(numA, numB, numTarget) {
  const isMultipleOfTwo = numTarget % numA === 0
  const isMultipleOfFive = numTarget % numB === 0

  if (isMultipleOfTwo && isMultipleOfFive) {
    return `${numTarget} is a common multiple of ${numA} & ${numB}`
  }
  if (isMultipleOfTwo) {
    return `${numTarget} is a multiple of ${numA}`
  }
  if (isMultipleOfFive) {
    return `${numTarget} is a multiple of ${numB}`
  }
  return
}

function bar(numA, numB, numTarget, cb) {
  let result = cb(numA, numB, numTarget)
  return result !== undefined ? result : `${numTarget} is not a common multiple of ${numA} & ${numB}`
}