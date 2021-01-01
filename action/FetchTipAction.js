const AlfredNode = require('alfred-workflow-nodejs');
const axios = require('axios')
const utils = AlfredNode.utils;

function getTipUrl() {
    const tipUrl = utils.envVars.get("tip");
    console.warn(`系统环境变量: ${tipUrl}`)
    return tipUrl;
}

async function getTipDataSource() {
    let tipUrl = getTipUrl();
    let json = {};
    await axios.get(tipUrl).then(res => {
        if (res.status === 200) {
            json = res.data;
        } else {
            throw Error('Net Error')
        }
    }).catch(err => {
        throw err;
    })
    return json;
}

module.exports = {getTipUrl, getTipDataSource}
