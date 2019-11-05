/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-04 22:46:13
 * @LastEditTime: 2019-11-05 09:12:06
 * @LastEditors: Devin Shi
 * @Description:
 */
const fs = require('fs')
const path = require('path')
let dapCli = require('../.dap-cli.json')


const routerReplaceFiles = [
  "../src/app/layout/ddmp-menu.service.ts",
  "../src/app/page/home/pages.routes.ts"
]

routerReplaceFiles.forEach(replaceFile => {
  fs.readFile(path.resolve(__dirname, replaceFile),'utf8',function(err,files) {
    var result = files.replace(new RegExp("(__START_PLUGIN_ROUTER__)[\\w\\W]*( __END_PLUGIN_ROUTER__)"),
    `__START_PLUGIN_ROUTER__ //
    let PLUGIN_ROUTER = ${JSON.stringify(dapCli.devRoutes, null, 2)}
    // __END_PLUGIN_ROUTER__`);
    fs.writeFile(path.resolve(__dirname, replaceFile), result, 'utf8', function (err) {
         if (err) return console.log(err);
    });
  })
})

const envReplaceFiles = [
  "../src/environments/environment.ts"
]

envReplaceFiles.forEach(replaceFile => {
  fs.readFile(path.resolve(__dirname, replaceFile),'utf8',function(err,files) {
    var result = files.replace(new RegExp("(__START_ENV_CONFIG__)[\\w\\W]*(__END_ENV_CONFIG__)"),
    `__START_ENV_CONFIG__ //
    ${JSON.stringify(dapCli.devEnv, null, 2).trim().substring(1, JSON.stringify(dapCli.devEnv, null, 2).trim().length - 2)}
    // __END_ENV_CONFIG__`);
    fs.writeFile(path.resolve(__dirname, replaceFile), result, 'utf8', function (err) {
         if (err) return console.log(err);
    });
  })
})

