// ----------------------------------------
//
//  @jnode/ai-x /service.js
//
//    Powerful AI API package for Node.js.
//
//    >_ dev | JustApple
//
// ----------------------------------------

// base AI service (API/provider)
class AIXService {
    constructor(options = {}) {
        this.baseUrl = options.baseUrl;
    }

    // internal AIXMethod of this service
    methods = {};
}
