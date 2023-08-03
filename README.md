<div align="center">
  <img src="./public/logo-white.png" style="width:300px"/>
  <h1><a href="https://inked-soul.vercel.app/" style="color:white">Inked Soul | 刺青師預約與媒合平台</a></h1>
</div>
<div align="center" style="display:flex;justify-content: space-between">
    <a href="https://file.notion.so/f/s/3b22b365-5319-4e21-bd88-92e39a9811f0/%E5%B0%88%E9%A1%8C%E7%B0%A1%E5%A0%B1.pdf?id=27818b1d-7675-4c3c-81b7-0b784664d5b1&table=block&spaceId=e71a0075-a30a-431a-9a61-9b7506cf3156&expirationTimestamp=1691193600000&signature=zsX4nezZFMlG-cvIYWq5iFGfh0gJEpI8cLLsBVWQDi8&downloadName=%E5%B0%88%E9%A1%8C%E7%B0%A1%E5%A0%B1.pdf">簡報介紹</a>
    <a href="https://inked-soul.vercel.app/" >前台網站</a>
    <a href="https://github.com/TeamRocket12th/Inked-Soul.git">後台repo</a>
    <a href="https://www.notion.so/96066b6702a34a8ab86eeeaf6c499480?v=2a8b8062037a49a88990704fc81016d3">API list</a>
    <a href="https://inkedsoul.rocket-coding.com/swagger/index.html?url=/swagger/v1/swagger.json">Swagger</a>
</div>
<div>
<img src="./public/home-banner.svg"/>
</div>

## 網站介紹

Inked Soul 提供一個專門服務刺青師與刺青愛好者的平台，透過聚集大量的刺青師，匯集大量品質優良的設計圖，使刺青愛好者可以更方便更快速的找到自己喜歡的設計圖

## 功能介紹

### 客戶端

- 搜尋篩選領圖
- 瀏覽刺青師個人介紹頁
- 會員註冊/登入
- 會員資料修改
- 會員查看刺青師預約時段
- 會員預約
- 會員透過「藍新金流」結帳
- 會員線上支付
- 會員查看預約紀錄
- 會員評價刺青師
- 會員追蹤刺青師
- 會員查看已追蹤刺青師列表
- 會員對認領圖留言

### 刺青師端

- 會員註冊/登入
- 會員資料修改
- 查看預約紀錄
- 確認或取消訂單
- 查看自己的預約狀況(行事曆)
- 上架可預約時段
- 查看評價
- 上架作品集
- 上架認領圖
- 置頂作品集
- 查看追蹤人數
- 選擇更改我的會員等級\*
- 自行新增臨時公休日
- 提取報酬\*
- 編輯我的行事曆\*

### 平台管理員\*

- 依照（刺青師是否付費）控制圖片曝光度
- 管理刺青師與顧客資格
- 審查可疑的設計圖及留言

## 建議體驗流程

### 一般用戶

- 註冊會員並登入
- 瀏覽認領圖首頁
- 選擇喜歡的風格與自己所在的城市
- 點選喜歡的認領圖並進入認領圖介紹頁
- 點選右側的刺青師大頭照進入刺青師個人介紹頁(optional)
- 瀏覽該刺青師的所有作品並確認是適合的刺青師(optional)
- 點選喜歡的認領圖並進入認領圖介紹頁
- 點選"認領圖"按鈕進入預約下單流程
- 填入個人資料並瀏覽刺青師可被預約的時段
- 選擇自己喜歡的時段
- 點選"確認付款"，送出預約
- 前往用戶後台查看訂單資訊
- 待刺青師回復確認後，填寫評價並送出

### 刺青師

- 註冊會員並登入
- 前往後台
  - 修改個人資料
  - 修改公休日
  - 選擇臨時公休日
  - 選擇營業時間
  - 選擇自己的風格
- 上架認領圖
- 上架作品集
- 查看訂單資訊並回復確認或取消
- 待用戶評價後查看評價

## 下載與安裝

- Clone 專案

```
  git clone https://github.com/TeamRocket12th/Inked-Soul.git
```

- 進入專案

```
  cd Inked-Soul.
```

- 安裝套件

```
  npm install
```

- 啟動專案

```
  npm run dev
```

## Git Commit 規範

| commit 類型 | 程式碼改動 | 使用情境                                   |
| ----------- | ---------- | ------------------------------------------ |
| feat        | 有         | 新增功能 (feature)                         |
| fix         | 有         | 修復 bug                                   |
| style       | 有         | 修改 CSS 樣式                              |
| update      | 有         | 不影響功能，單純更新                       |
| refactor    | 有         | 重構 (不是新增功能，也不是修復 bug 的更改) |
| doc         | 無         | 文件相關                                   |
| others      | N/A        | 其他                                       |

## Git Branch 命名規則

| 分支名稱       | 說明             |
| -------------- | ---------------- |
| main           | 正式分支         |
| dev            | 測試分支         |
| release-版本號 | 整合發布分支     |
| feature/xxx    | 以元件｜功能分類 |
| hotfix/xxx     | 修復什麼東西     |
| config/xxx     | 修改設定內容     |

## 開發工具

### 設計

- Figma
- Adobe Illustrator

### 前端

- vue 3
- nuxt 3
- tailwindCss
- pinia
- mockoon

### 後端

- C#
- LINQ
- Visual Studio
- Swagger
- MS SQL
- Postman
- MVC WEBAPI
- Microsoft Azure
