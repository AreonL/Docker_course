const db = require('./db')

async function filt(table, searchWord) {
    let result;
    try {
        // const startTime = performance.now()
        result = await db.promise().query(
            `SELECT * FROM ${table} WHERE log_saved LIKE \'%${searchWord}%\'`
        )
        // const endTime = (performance.now() - startTime) / 1000;
        // console.log(endTime, "<-")
    } catch (err) {
        console.log(err)
    }
    return result
}

async function loops() {
    for (let _ of [...Array(100)]) {
        const startTime = performance.now();
        const result = await filt('100k', 'Received')
        const endTime = (performance.now() - startTime) / 1000;
        console.log(endTime, "<-")
    }
    db.end()
}

loops()