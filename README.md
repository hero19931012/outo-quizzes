## Quiz 1.
> Give two functions.  
> One for processing a parameter, the type is number, to detect if it is a multiple of 2 or multiple of 5.  
> The function returns a response '<<number>> is a multiple of 2', which means it is a multiple of 2 but not a multiple of 5, vice versa.  
> When the process parameter is a common multiple of 2 & 5, returns response '<<number>> is a common multiple of  2 & 5'  instead.  
> The rest of the situations, return an exception.  
> The other one for call the above function and display what it returns if there has no exception.  
> Otherwise, response "<<number>> is not a common multiple of 2 & 5"

```javascript=
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
```

## Quiz 2.
>Draw a backend architecture if you have the power to redesign Booking.com with AWS tools.




## Quiz 3.
>Please share your opinion about how do you evaluate is the project suit RPC or RESTful.

RPC 的 URI 不如 RESTful 那樣面向資源並用 http method 區分用途，而是一個 URI 做一件事，所以會把動詞寫進 URI 中，下面我把兩者的優缺點列出來，最後給結論：
- RPC 優點：
  1. 制定自由，可以進行的操作也能比較複雜
  2. 拿資料用 GET，傳資料用 POST，減少 http method 要用什麼的判斷
- RPC 缺點：
  1. URI 較無規則，API 文件需寫得詳細一點

- RESTful 優點：
  1. 面向資源的 URI 搭配不同的 http method，方便看出請求會如何存取資源
  2. URI 較規律，文件比較容易閱讀
- RESTful 缺點
  1. 比較難操作複雜的請求，如在一次請求中處理多個 id 的資源

結論
RESTful => 在資源種類眾多、需要串接的對象較多的情況下，就會考慮用 RESTful API
RPC => 資源種類少、或需要串接的對象只有自己或少數人，就可以用 RPC 風格來設計 API