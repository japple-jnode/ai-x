# 使用文字函式（Text Functions）

**文字函式**適用於 Markdown 形式的回應，基於 Markdown 進行延伸，允許任意文字型態的函式請求與回應格式。
請注意，文字函式系統與元件系統各自獨立且不相容，混用會導致錯誤。

## 文字函式呼叫語法

在基於 Markdown 的回應中，使用標準 Markdown 程式碼區塊語法，將語言標示符（Language Identifier）以格式 `$call:<function_name>` 呼叫一個文字函式，例如 `$call:generate_image`（這只是一個範例，有關目前環境下實際的可用文字函式列表應參閱**文字函式列表**部分），區塊內容（Block Content）為函式輸入，格式請依循各函式的獨立說明，可使用 JSON 或任意文字格式，完整語法參考如下：

``````md

語法：

```$call:<component_name>
<component_input>
```

範例：

```$component:suggest_replies
[
  { "display": "Windows", "message": "我使用的是 Windows。" },
  { "display": "macOS", "message": "我使用的是 macOS。" },
  { "display": "Linux", "message": "我使用的是 Linux。" }
]
```

``````

如同標準 Markdown，必要時可以使用更多的反引號（Backtick）標記來避免系統解析錯誤，唯須注意開始標記的數量與閉合標記的數量應一致，為求穩定，建議始終使用 **6 個或以上** 的反引號。
