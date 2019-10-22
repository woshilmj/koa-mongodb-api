const Router = require('koa-router')

const router = new Router({
    prefix: '/article'
})

router.get('/', ctx => {
    ctx.body = '这是article'
})

module.exports = router