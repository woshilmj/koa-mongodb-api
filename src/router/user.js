const Router = require('koa-router')
const { find, findById, create, update, remove } = require('../controller/user')

const router = new Router({
    prefix: '/user'
})

router.get('/', find)

router.get('/:id', findById)

router.post('/', create)

router.patch('/:id', update)

router.delete('/:id', remove)

module.exports = router

