// const fs = require('fs')
const path = require('path');

// 从环境变量中获取
// const { NODE_ENV } = process.env; 
// const settingName=
// NODE_ENV = 'production'?'pro':
// NODE_ENV = 'development'?'it':
// NODE_ENV = 'test'?'test':'dev';

//封装 resolve
// const resolve = (p) => path.join(__dirname, p); 
// console.log(settingName,"rrr")
/**
 * 读取文件
 * 文件格式内容为
 * TEST=ABC
 * @param {路径} p 路径
 * @return [[TEST:ABC]]
 */
// const readEnv = (p) => {
//     fs
//     .readFileSync(resolve(p))
//     .toString()
//     .trim()
//     .split('\n')
//     .filter((l) => l.indexOf('=') !== -1)
//     .map((v) => v.split('='));
// }

// 读取./config/development中的文件，

// fs.writeFileSync(
//   resolve(`./.env.${NODE_ENV}.local`),
//   readEnv(`./config/configs.${settingName}`)
//     .map(([key, value]) => `${key}=${value}`)
//     .join('\n'),
// );