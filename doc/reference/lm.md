# `@jnode/ai-x/lm` Reference

## Class: `lm.LMMethod`

### Static: `LMMethod.name`

- Type: `String` (Optional)

Human-readable name of the method. E.g., `"OpenAI Chat Completion"`, `"Gemini API List Models"`.

### Static: `LMMethod.description`

- Type: `String` (Optional)

Human-readable description of the method. E.g., `"Calls OpenAI-style's chat completion endpoint."`, `"Lists available models in a Gemini-API-style API"`.

### Static: `LMMethod.aixMethod`

- Type: `String`

A standard method name of AIX LM, listed in [`doc/lm/methods`](./../lm/methods.md). Custom AIX method names are not allowed.

### Static: `LMMethod.buildBody(aixBody)`

- `aixBody`: `Object` | `any` The request body following the AIX standard format for this method.
- Returns: `Object` | `any` The service's native request body.

Builds request body for specific service (API format or something) from standard AIX format request body.

### Static: `LMMethod.transformBody(body)`

- `body`: `Object` | `any` The service's native request body.
- Returns: `Object` | `any` The request body following the AIX standard format for this method.

Transforms native request body for specific service (API format or something) to AIX standard format request body.

This static method may not be supported by every `LMMethod`, check their docs before using it.

### Static: `LMMethod.buildResponse(aixResponse)`

- `aixResponse`: `Object` | `any` The response body following the AIX standard format for this method.
- Returns: `Object` | `any` The service's native response body.

Builds response body for specific service (API format or something) from standard AIX format response body.

This static method may not be supported by every `LMMethod`, check their docs before using it.

### Static: `LMMethod.transformResponse(response)`

- `response`: `Object` | `any` The service's native response body.
- Returns: `Object` | `any` The response body following the AIX standard format for this method.

Transforms native response body for specific service (API format or something) to AIX standard format response body.

### Static: `LMMethod.execute(body, context)`

- `body`: `Object` | `any` The service's native request body.
- `context`: `Object` | `any` The additional context for the service, like authorization token and something else.
- Returns: `Promise<any>` | `any` The service's native response body in any type. Could be JSON data, `AsyncIterator` or anything else, all depends on service.

Executes the request and receive response.
