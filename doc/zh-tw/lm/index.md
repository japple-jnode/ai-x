# 適用於語言模型（LM）的 JNode AIX

JNode AIX 提供先進的語言模型支援，協助您的 Node.js 專案引入基於語言模型的智慧功能。

我們在後續的內容中為求便利，會將**適用於語言模型的 JNode AIX** 簡稱為 **AIX LM**。

## 快速開始

您可以透過以下程式碼體驗 AIX LM。

```js
import {  } from '@jnode/ai-x/lm';
```

在這段程式碼中，

## 運作模式

此部分將協助您了解 AIX LM 如何運作。

### `LMProtocol`

`LMProtocol` 是一切的基礎，其衍伸**類別**表示一語言模型原始 API 之協議種類，並提供各項功能之調用方法。這裡所指之「協議」並不限於 HTTP 等形式之協議，不同語言模型原始 API 之 API 格式，如 OpenAI API 格式、Gemini API 格式等，也可視為不同協議。

標準之 `LMProtocol` 衍伸**類別**具備以下調用方法之屬性，值皆為 `LMMethod` 之實例：

- `interact`：

- `aixToProtocol(aixObject) -> protocolObject`：將 AIX LM 通用調用參數結構變換為該協議訂定之調用參數結構。
- `protocolToAix(protocolObject) -> aixObject`：將該協議訂定之調用參數結構變換為 AIX LM 通用調用參數結構。
- `execute(protocolObject, options) -> LMResponse`：以該協議訂定之調用參數進行調用
