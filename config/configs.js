
const configDev=require("./configs.dev")
const configIt=require("./configs.it")
const configPre=require("./configs.pre")
const configProd=require("./configs.prod")

let configObj = configDev;

let NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV==="test"){
    configObj=configPre

}if (NODE_ENV==="development"){
    configObj=configDev

} else if (NODE_ENV==="production"){
    configObj=configProd

} else {
    configObj=configIt
}

let configs=configObj.default

export default configs;