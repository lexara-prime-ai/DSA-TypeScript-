const debug = console.log;

class APP {
    static FIND_UNIQUE_CHAR(str: any) {
        if (typeof str !== "string") {
            str.toString();
            let VALUES: string[] = [];
            for (let letter of str) {
                // RETURN THE FIRST CHARACTER THAT IS REPEATED
                if (VALUES.indexOf(letter) !== -1) {
                    return letter;
                }
                VALUES.push(letter);
            }
            return 'Nothing to return...';
        }
    }

}

debug(APP.FIND_UNIQUE_CHAR(1134))
