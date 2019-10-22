const Router = require('koa-router')

const router = new Router()

router.get('/', ctx => {
    ctx.body = '这是Home'
})


module.exports = router