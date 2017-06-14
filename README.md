# NCUE Plus [![Build Status](https://travis-ci.org/ALiangLiang/NCUE-Plus-webextension.svg?branch=master)](https://travis-ci.org/ALiangLiang/NCUE-Plus-webextension)

## 產品特色 Feature

- 解鎖IE限制</li>
- 自動填入圖形驗證碼</li>
- 「已讀」系統首頁的彈跳公告</li>
- 修復選課操作系統</li>
- 修復課表下載按鈕</li>
- 可一鍵全選教學意見反應問卷選項</li>
- 在課程查詢頁面中，增加課程評論系統</li>


## 產品安裝 Production installation

[![Install from Web Store](https://raw.githubusercontent.com/ALiangLiang/NCUE-Plus-webextension/master/tryitnowbutton_small.png)](https://chrome.google.com/webstore/detail/agbcepaalgmkkbfognoaonhippllckkc)

see https://chrome.google.com/webstore/detail/agbcepaalgmkkbfognoaonhippllckkc

Source Code: https://github.com/ALiangLiang/NCUE-Plus-webextension

##  建置 Build 

```bash
grunt build
```
or
```bash
grunt
```

##  監聽 Watch 

```bash
grunt watch
```

##  更新記錄

- ##### 版本2.0.1
1. 修正 主機判斷錯誤，導致無法載入課程評論系統

- ##### 版本2.0.0
1. 新增 課程評論系統
2. 修正 程式名稱 從 NCUE新教務系統 Supporter → NCUE Plus

- ##### 版本1.7.0
1. 新增 自動全選教學意見反應問卷

- ##### 版本1.6.3
1. 修正 選課系統，加選驗證碼辨識

- ##### 版本1.6.2
1. 修正 課程查詢系統，教師資訊無法顯示

- ##### 版本1.6.1
1. 修正 課程查詢系統，課表顯示錯誤問題

- ##### 版本1.6.0
1. 新增 「網路加退選」驗證碼辨識
2. 變更 系統首頁的「學生會」文字超連結至學生會粉專

- ##### 版本1.5.5
1. 新增 跨平台至 Firefox 與 Firefox for android

- ##### 版本1.5.4
1. 修復 廣告

- ##### 版本1.5.3
1. 新增 修復已選課表列印功能
2. 更新 修復已選清單的伸縮按鈕圖示

- ##### 版本1.5.2
1. 更新 修復網路加退選作業

- ##### 版本1.5.1
1. 新增 修復課表列印功能
2. 更新 更動程式碼注入目標
3. 更新 修正選課頁面的小icon顯示問題

- ##### 版本1.5.0
1. 新增 advertisement

- ##### 版本1.4.2
1. 修正 content script match pattern

- ##### 版本1.4.1
1. 壓縮、混淆
2. 優化

- ##### 版本1.4.0
1. 新增 驗證碼辨識
2. Refactor

- ##### 版本1.3.3
1. 修復 選課功能

- ##### 版本1.3.2
1. 修正 程式名稱 從 IE™ Free for NCUE → NCUE新教務系統 Supporter

- ##### 版本1.3.1
1. 修正 公告字串切割BUG
2. 暫時取消 自動填入驗證碼功能

- ##### 版本1.3.0
1. 可以正常使用「選課」功能
2. 解決左側選單EEROR

- ##### 版本1.2.0
1. 增加軟體訊息欄位
2. 增加彈跳視窗「已讀」功能
3. 修正驗證碼無法讀取的錯誤

- ##### 版本1.1.1
1. 修正多餘權限

- ##### 版本1.1.0 
1. 阻擋限用IE瀏覽器的跳窗
2. 增加適用網址
3. 全面改用javascript原生函式，提升效能
4. 縮減程式占用容量

## 授權條款 License

[MIT license](https://raw.githubusercontent.com/ALiangLiang/NCUE-Plus-webextension/master/LICENSE)
