## Quiz 1.
> Give two functions.  
> One for processing a parameter, the type is number, to detect if it is a multiple of 2 or multiple of 5.  
> The function returns a response '<<number>> is a multiple of 2', which means it is a multiple of 2 but not a multiple of 5, vice versa.  
> When the process parameter is a common multiple of 2 & 5, returns response '<<number>> is a common multiple of  2 & 5'  instead.  
> The rest of the situations, return an exception.  
> The other one for call the above function and display what it returns if there has no exception.  
> Otherwise, response "<<number>> is not a common multiple of 2 & 5"

檔案：[two functions.js](https://github.com/hero19931012/outo-quizzes/blob/main/two%20functions.js)  
code:  
```javascript=
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
```

### 邏輯
1. 由於沒給 `numTarget` 的範圍，直接假設為正整數
2. `foo` 函數接收 3 個參數，`numA`, `numB` & `numTarget`，透過 `numTarget % numA` 與 `numTarget % numB` 是否等於 0 來判斷 `numTarget` 是不是 `numA` 與 `numB` 的倍數
3. 如果兩者皆符合就回傳 numTarget is a common multiple of numA & numB
4. 若只符合一項就回傳 numTarget is a multiple of numA (或 numB)
5. 如果都不符合就回傳 undefined
6. `bar` 函數接收 `numA`, `numB` & `numTarget` 與一個 `cb`
7. 宣告 `result` 為 `cb(numA, numB, numTarget)` 的回傳值
8. 判斷 `result` 是否為 undefined
9. 如果為 undefined，回傳 numTarget is not a common multiple of numA & numB
10. 如果不是 undefined，直接回傳 `result`
11. 呼叫 `bar(2, 5, number, foo)`

## Quiz 2.
>Draw a backend architecture if you have the power to redesign Booking.com with AWS tools.

### 使用的服務
1. `Route 53` 設定 DNS
2. `CloudFront` 快取常用資料
3. `ELB` 將不同請求導向至對應的 EC2 伺服器
4. `EC2` 建立多個微服務伺服器，接收來自 ELB 的請求，向資料庫存取資料
5. `RDS` 建立讀寫分離的 MySQL 資料庫 (master & slave)
6. `S3` 儲存圖片等資料

### 結構
![](https://i.imgur.com/6UqUhR7.png)

## Quiz 3.
>Please share your opinion about how do you evaluate is the project suit RPC or RESTful.

RPC 的 URI 不如 RESTful 那樣面向資源並用 http method 區分用途，而是一個 URI 做一件事，所以會把動詞寫進 URI 中，以下列出兩者的優缺點進行比較，最後給結論：
- RPC 優點：
  1. 制定自由，可以進行的操作也能比較複雜
  2. 拿資料用 GET，傳資料用 POST，減少 http method 要用什麼的判斷
- RPC 缺點：
  1. URI 較無規則，API 文件需寫得詳細一點，如果是自己用就不需擔心文件的撰寫

- RESTful 優點：
  1. 面向資源的 URI 搭配不同的 http method，方便看出請求會如何存取資源
  2. URI 較規律，文件比較容易閱讀
- RESTful 缺點
  1. 比較難操作複雜的請求，例如在一次請求中處理多個資源

### 結論
RESTful => 在資源種類眾多、需要串接的對象較多的情況下，透過將資源區分開來，且透過 http method 來表達用途，能夠提高使用者對請求的理解，也使文件的易讀性提高，對於多數使用者較為友善，因此用 RESTful API 會是比較好的選擇。  
  
RPC => 在資源種類少、或需要串接的對象只有自己或少數人的時候，由於不必特地區分 URI 存取的資源，API 的設計不需經過縝密的思考，很快就能建立，且使用者較少，不需考慮文件該如何寫得簡單易懂，因此會考慮用 RPC 風格來設計 API。