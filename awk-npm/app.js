const awkjs = require('awkjs').awkjs
const fs = require('fs')

const data = fs.readFileSync('../data/Zookeeper.log')

async function filt() {
    const startTime = performance.now()
    s = await awkjs().then(({awk}) => {
        return awk(data, `/Received/`, []);
    })
    const endTime = (performance.now() - startTime) / 1000
    console.log(endTime, '<-');
}

async function loops() {
    for (let _ of [...Array(100)]) {
        await filt()
    }
}
loops()