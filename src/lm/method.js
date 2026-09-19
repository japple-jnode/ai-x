// ----------------------------------------
//
//  @jnode/ai-x /lm/method.js
//
//    Powerful AI API package for Node.js.
//
//    >_ dev | JustApple
//
// ----------------------------------------

// base class for a method
class LMMethod {
    static name = 'Method';
    static description = 'A method for language models.';
    static aixMethod = 'method'; // AIX standard method name

    // build body from AIX universal format
    static buildBody(aixBody) {
        return aixBody; // return directly as placeholder here, change it!
    }

    // optional support, transform body to AIX universal format
    static transformBody(body) {
        return body; // return directly as placeholder here, change it!
    }

    // optional support, build response from AIX universal format
    static buildResponse(aixResponse) {
        return aixResponse; // return directly as placeholder here, change it!
    }

    // transform response to AIX universal format
    static transformResponse(response) {
        return response; // return directly as placeholder here, change it!
    }

    // excutes the method, arguments can be changed since LMMethod is recommend to call internally, returns response
    static execute(body, context) {
        const response = { status: 200, body, context }; // just an example
        return response;
    }
}