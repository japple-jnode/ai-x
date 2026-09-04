# 回應擴充功能：元件（Components）

**元件**允許更豐富的輸出形式與射後不理的（Fire and forget）工具調用，與函式呼叫等其他機制或活應擴充功能各自獨立且不相容，混用會導致錯誤。

元件所使用的協議（Protocol）為 `components:`

## 元件語法

在基於 Markdown 的回應中，使用標準 Markdown 程式碼區塊語法，將語言標示符（Language Identifier）以格式 `$component:<component_name>` 宣告一個元件區塊並指定元件名稱，例如 `$component:suggest_replies`（這只是一個範例，有關目前環境下實際的可用元件列表應參閱**元件列表**部分），區塊內容（Block Content）為元件輸入，格式請依循各元件的獨立說明，可使用 JSON 或任意文字格式，完整語法參考如下：

``````md

語法：

```$component:<component_name>
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

元件語法不得置於區塊引言（Block Quote）、一般程式碼區塊或縮排內，否則無法被解析。

## 元件的種類

元件種類為參考性質而非強制標準，一般來說，一個元件可能屬於以下種類的一項或多項：

1. **介面元件（UI Component）**：能向使用者顯示為某種視覺介面的元件，例如提供回應建議等。
2. **微函式元件（Micro Function Component）**：即射後不理型工具，系統會執行該元件所代表的操作，例如對使用者訊息反應表情符號等。

## 元件列表

以下為所有可使用的元件列表，此列表以如下格式為基礎提供：

``````md
### `<component_name>`

<component_description>

``````
