const fs = require('fs')
const path = require('path')

const routerList = fs.readdirSync(path.resolve(__dirname, '../router'))


module.exports = function (app) {
    routerList.forEach(file => {
        if (file !== 'index.js') {
            const route = require(`./${file}`)
            app.use(route.routes(), route.allowedMethods())
        }
    })
}