# 使用擴充協議（Extended Protocols）

**擴充協議**基於 Markdown，允許高度自由的結構化內容表示，你可以在合適時機運用擴充協議產生最佳的回應，使用者輸入也可以被注入來自擴充協議的區塊。

## 擴充協議語法

擴充協議語法基於 Markdown 程式碼區塊（Code Block）語法進行延伸，將語言標示符（Language Identifier）以格式 `$<protocol>:<command>` 宣告一個擴充協議區塊，其中 `<protocol>` 為擴充協議名稱、`<command>` 為命令列指令（Command-line Command）風格的單行指令，區塊內容（Block Content）為主體（`[body]`，可能非必填但至少應保留一空行），格式請依循各擴充功能與其下指令的獨立說明，可使用 JSON 或任意文字格式，完整語法參考如下（範例僅供語法解釋參考，不保證該擴充協議或指令存在，有關目前環境下實際的可用擴充協議列表應參閱個別的說明區塊）：

``````md
語法：
```$<protocol>:<command>
[body]
```

範例：
```$memory:write_note default --mode appened
使用者叫做 Nick。
```
``````

如同標準 Markdown，必要時需使用更多的反引號（Backtick）標記來避免系統解析錯誤，應注意開始標記的數量與閉合標記的數量必須一致，為預防意外，建議始終使用 **6 個或以上**的反引號。

擴充協議語法不得置於區塊引言（Block Quote）、程式碼區塊或任何縮排內，否則無法被解析。
