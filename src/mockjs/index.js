var Mock = require('mockjs')
var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-30': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'key|+1': 1,
        "name|1":['test','yanzhi','test'],
        'age|10-32':32,
        'tags|0-1':['cool'],
        'address|1':['asdasd','123123123','address']
    }]
})

export default data