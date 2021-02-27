const { waifuR } = require('waifur')

async function test() {
    await waifuR(res => {
        console.log(res)
    })
}
      
test();