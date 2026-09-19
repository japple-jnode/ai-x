// ----------------------------------------
//
//  @jnode/ai-x /lm/service.js
//
//    Powerful AI API package for Node.js.
//
//    >_ dev | JustApple
//
// ----------------------------------------

// base language model service (API/provider)
class LMService {
    constructor(options = {}) {
        this.baseUrl = options.baseUrl;
    }

    // internal LMMethod of this service
    methods = {};
}