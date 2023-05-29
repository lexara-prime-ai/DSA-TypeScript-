let CHARS = {
    // LOG TO CONSOLE
    logToConsole(msg: any) {
        console.log(msg);
    },

    // COUNT REPEATED CHARS
    COUNT_REPEATED_CHARS(INPUT: String) {
        let TEMP = INPUT.split("");
        let CHARS: any[] = [];
        let COUNT = 1;

        for (let i = 0; i < TEMP.length; i++) {
            if (TEMP[i] === TEMP[i + 1]) {
                COUNT++;
            } else {
                let VALUE = `${COUNT}: ${TEMP[i]} `;
                CHARS = [...CHARS, VALUE];
                COUNT = 1;
            }
        }
        return CHARS.join("");
    }
}

CHARS.logToConsole(CHARS.COUNT_REPEATED_CHARS('yyyyeeeaaahh!'));