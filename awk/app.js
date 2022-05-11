const util = require("util")
const { exec } = require("child_process")

const execPromise = util.promisify(exec);

async function filt(file, searchWord) {
    // const startTime = performance.now()
    const result = await execPromise(`awk '/${searchWord}/ {print}' ../data/${file}.log`, {maxBuffer: 1024 * 137000})
    // const endTime = (performance.now() - startTime) / 1000;
    // console.log(endTime, '<-');
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
