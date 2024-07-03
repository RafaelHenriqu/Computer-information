const os = require('os')
// Config of Destkop //
function CPU(){
    return os.cpus()[1].model
}

function Memory(text_formatted){
    const Converte = (os.totalmem() / 1073741824).toString()
    if (text_formatted){
        const Memory = `${Converte.split('.')[0]},${Converte.split('.')[1][0]} GB`
        return Memory
    }else{ 
        const Memory = Converte.split('.')[0]
        return Memory
    }
    
    
}

function Desktop_Name(){
    return os.hostname()  
}

function IP(){
    return os.networkInterfaces()["Ethernet"][0]["address"]
}

function System(){
    return os.platform()
}

function UserName(){
    return os.userInfo()["username"]
}

// Exports //

module.exports={
    CPU,
    Memory,
    Desktop_Name,
    IP,
    System,
    UserName
}