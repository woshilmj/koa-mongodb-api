const Koa = require('koa')
const routes = require('./src/router/index')
const config = require('./config')
const mongoose = require('mongoose')
const koaBody = require('koa-body')
const error = require('koa-json-error')
const parameter = require('koa-parameter')

mongoose.connect(config.db,{ useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', err => {
    console.log('数据库连接错误', err)
})
db.once('open', res => {
    console.log('数据库连接成功', res)
})

console.log(process.env.NODE_ENV)
const app = new Koa()
app.use(error({
    postFormat: (e, {stack, ...rest}) => process.env.NODE_ENV === 'production' ? rest : {stack, ...rest}
}))
app.use(koaBody())
app.use(parameter(app))
routes(app)


app.listen(3000, () => {console.log('项目启动了...')})