### `suggest_replies`

介面元件，向使用者提供下一步回應的建議選項，使用 JSON 輸入，格式定義：

```js
[
    // 選項物件
    {
        "display": String, // 顯示給使用者的選項名稱
        "message": String // 使用者點擊選項後會自動發送的訊息內容
    },
    ...
]
```

### `reaction`

微函式元件，對使用者的訊息反應表情符號，直接輸入表情符號（如 `❤️`），呼叫範例：

``````md
```$component:reaction
❤️
```
``````
