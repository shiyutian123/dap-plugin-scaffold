/*
 * @Author: Devin Shi
 * @Email: yutian.shi@definesys.com
 * @Date: 2019-11-05 10:02:39
 * @LastEditTime: 2019-11-05 11:30:22
 * @LastEditors: Devin Shi
 * @Description:
 */
const shell = require('shelljs');
const path = require('path')
const fs = require('fs');
const zipper = require("zip-local");
const http = require("http")
const ProgressBar = require('progress');
const https = require('https');


const pluginsDir = path.resolve(__dirname, "../src/plugins/")
const assetsDir = path.resolve(__dirname, "../src/assets/plugins/")
const dapCliJsonPath = path.resolve(__dirname, "../.dap-cli.json")


const distDir = path.resolve(__dirname, "../node_modules/.dap-package/")

const distZipPath = path.resolve(__dirname, "../node_modules/.dap-package/dap-plugin.zip")

const distSrcDir = path.resolve(__dirname, "../node_modules/.dap-package/src")
const distAssetsDir = path.resolve(__dirname, "../node_modules/.dap-package/src/assets")

if (fs.existsSync(distDir)) {
  shell.rm('-rf', distDir);
  shell.mkdir('-p', distSrcDir);
  shell.mkdir('-p', distAssetsDir);
} else {
  shell.mkdir('-p', distSrcDir);
  shell.mkdir('-p', distAssetsDir);
}

shell.cp('-Rf', `${pluginsDir}/`, distSrcDir)
shell.cp('-Rf', `${assetsDir}/`, distAssetsDir)
shell.cp('-Rf', `${dapCliJsonPath}`, distDir)

zipper.sync.zip(distDir).compress().save(`${distZipPath}`);

var req = https.request({
  host: 'codeload.github.com',
  port: 443,
  path: '/iBotPeaches/Apktool/zip/v2.4.0'
});
req.on('response', function(res){
  console.log(res.headers['content-length'])
  var len = parseInt(res.headers['content-length'], 10);
  var bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 30,
    total: len
  });

  res.on('data', function (chunk) {
    bar.tick(chunk.length);
  });

  res.on('end', function () {
    console.log('\n');
  });
});

req.end();
