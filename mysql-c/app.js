const db = require('./db')

async function filt() {
    try {
        const startTime = performance.now()
        const res = await db.promise().query(
            `SELECT * FROM d_1000k WHERE
            date   LIKE '%Received%' OR
            time   LIKE '%Received%' OR
            status LIKE '%Received%' OR
            action LIKE '%Received%' OR
            description LIKE '%Received%'`
        )
        const endTime = (performance.now() - startTime) / 1000;
        console.log(endTime, "<-")
    } catch (err) {
        console.log(err)
    }    
}

async function loops() {
    for (let _ of [...Array(100)]) {
        await filt()
    }
    db.end()
}

loops()