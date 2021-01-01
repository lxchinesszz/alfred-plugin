const AlfredNode = require('alfred-workflow-nodejs');
const Item = AlfredNode.Item;

function createNetErrorItem() {
    return new Item({
        title: '请检查网络',
        subtitle: '检车到你的网络状态不太好,请恢复后使用',
        valid: false,
        icon: AlfredNode.ICONS.ERROR
    });
}

function createTipItem(tip) {
    return new Item({
        title: tip.gitCommand,
        subtitle: tip.gitCommandDesc,
        valid: false,
        arg: {arg: 'xyz', variables: {"wfValue": tip.gitCommand}},
        icon: AlfredNode.ICONS.INFO,
        mods: {
            cmd: {
                valid: true,
                arg: tip.gitCommand,
                subtitle: `复制命令:${tip.gitCommand}`
            },
            alt: {
                valid: true,
                arg: tip.gitCommandDesc,
                subtitle: `复制辅助提示:${tip.gitCommandDesc}`
            }
        }
    });

}

module.exports = {createTipItem, createNetErrorItem}
