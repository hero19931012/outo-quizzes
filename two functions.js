function foo(numA, numB, numTarget) {
  const isMultipleOfNumA = numTarget % numA === 0
  const isMultipleOfNumB = numTarget % numB === 0

  if (isMultipleOfNumA && isMultipleOfNumB) {
    return `${numTarget} is a common multiple of ${numA} & ${numB}`
  }
  if (isMultipleOfNumA) {
    return `${numTarget} is a multiple of ${numA}`
  }
  if (isMultipleOfNumB) {
    return `${numTarget} is a multiple of ${numB}`
  }
  return
}

function bar(numA, numB, numTarget, cb) {
  let result = cb(numA, numB, numTarget)
  return result !== undefined ? result : `${numTarget} is not a common multiple of ${numA} & ${numB}`
}

let number
bar(2, 5, number, foo)