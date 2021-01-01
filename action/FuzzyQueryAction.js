function fuzzyQuery(keyWord, tipsJson) {
    const reg = new RegExp(keyWord);
    const arr = [];
    for (let tip in tipsJson) {
        let name = tipsJson[tip].name
        let tips = tipsJson[tip].tips
        for (let tipIndex in tips) {
            let tipCommand = tips[tipIndex][0]
            let tipCommandDesc = tips[tipIndex][1]
            if (reg.test(tipCommand) || reg.test(tipCommandDesc) || reg.test(name)) {
                arr.push({
                    "gitCommand": tipCommand,
                    "gitCommandDesc": tipCommandDesc
                })
            }
        }
    }
    return arr;
}

module.exports = {fuzzyQuery}
