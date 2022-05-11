const fs = require('fs')

async function filt(file, searchWord) {
    const data = fs.readFileSync(`../data/${file}.log`, "utf8").split('\n')
    // const startTime = performance.now();
    const result = data.filter(i => i.includes(searchWord))
    // const endTime = (performance.now() - startTime) / 1000;
    // console.log(endTime, "<-")
    return result
}

async function loops() {
    for (let _ of [...Array(100)]) {
        const startTime = performance.now();
        const result = await filt('Zookeeper', 'Received')
        const endTime = (performance.now() - startTime) / 1000;
        console.log(endTime, "<-")
    }
}

loops()