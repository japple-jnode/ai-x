// ----------------------------------------
//
//  @jnode/ai-x /util
//
//    Powerful AI API package for Node.js.
//
//    >_ dev | JustApple
//
// ----------------------------------------

// dependencies
import util from 'node:util';

// command space checker
export function isCommandSpace(char) {
    return char === 32 || char === 9 || char === 10;
}

// parse command
export function parseCommand(commandStr = '', options) {
    const parts = [];
    let i = 0;

    // skip spcaes
    function skipSpaces() {
        while (i < commandStr.length) {
            if (isCommandSpace(commandStr.charCodeAt(i))) i++;
            else break;
        }
    }

    // collect string
    function collectString(stringCode = 34) {
        let str = '';

        while (i < commandStr.length) {
            const char = commandStr.charCodeAt(i);

            if (char === stringCode) { i++; break; }
            else if (char === 92) { str += commandStr[++i]; i++; } // escape
            else str += commandStr[i++];
        }

        return str;
    }

    // main loop
    while (i < commandStr.length) {
        skipSpaces();

        let part = '';

        while (i < commandStr.length) {
            const char = commandStr.charCodeAt(i);

            if (isCommandSpace(char)) break;
            else if (char === 92) { part += commandStr[++i]; i++; } // escape
            else if (char === 34) part += collectString(34);
            else if (char === 39) part += collectString(39);
            else part += commandStr[i++];
        }

        parts.push(part);
    }

    // parse args and inject command name
    const command = util.parseArgs({ args: parts.slice(1), options, strict: false });
    command.name = parts[0];
    command.fullCommand = parts;

    return command;
}