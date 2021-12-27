const cluster = require('cluster');
const os = require('os');
const { Worker, workerData } = require('worker_threads');
const pid = process.pid;

if (cluster.isMaster) {

    const CPUCount = os.cpus().length;
    console.log(`System has ${CPUCount} CPUs`);

    console.log(`Master started! PID=${pid}`);
    for (let i = 0; i < CPUCount - 1; i++) {
        const slave = cluster.fork();
        console.log(`Slave is working on PID=${slave.process.pid}`);

        slave.on('exit', () => {
            console.log(`Slave PID=${slave.process.pid}`);
            cluster.fork();
        });
        // slave.send(`Slave PID=${slave.process.pid}`);
        slave.on('message', (blob) => {
            console.log(JSON.stringify(blob));
        })
    }
}

if (cluster.isWorker) {
    require('./worker.js');
    process.on('message', (blob) => {
        console.log(`Message from worker ${blob}`);
    });
    process.send({text: `Hello from Slave PID=${pid}`, pid: pid });
}