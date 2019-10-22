const User = require('../schema/user')

const find = async function (ctx, next) {
    const userList = await User.find()
    ctx.body = userList
}

const findById = async function (ctx, next) {
    const id = ctx.params.id
    try {
        const user = await User.findById(id)
        if (!user) {
            ctx.throw(412, '没有找到指定用户')
        }
        ctx.body = user
    } catch (e) {
        ctx.throw(412, '没有找到指定用户')
    }
    
}

const create = async function (ctx, next) {
    ctx.verifyParams({
        name: {type: 'string', required: true},
        age: {type: 'number', required: true}
    })
    const user = await User.create(ctx.request.body)
    ctx.body = user
}

const update = async function (ctx, next) {
    const id = ctx.params.id
    console.log(id)
    ctx.verifyParams({
        name: {type: 'string', required: false},
        age: {type: 'number', required: false}
    })
    try {
        const user = await User.findByIdAndUpdate(id, ctx.request.body)
        if (!user) {
            ctx.throw(412, '没有找到指定用户')
        }
        ctx.body = user
    } catch (e) {
        ctx.throw(412, '没有找到指定用户')
    }
}

const remove = async function (ctx, next) {
    const id = ctx.params.id
    console.log(id)
    try {
        const remove = await User.deleteOne({_id: id})
        if (remove.deletedCount) {
            ctx.status = 204
        } else {
            ctx.throw(412, '没有找到指定用户')
        }
    } catch (e) {
        ctx.throw(412, '没有找到指定用户')
    }
}

module.exports = {
    find,
    findById,
    create,
    update,
    remove
}