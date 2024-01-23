/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// async function sleep(milliseconds) {

//     const deepu =  new Promise((resolve,reject)=>{return setTimeout(resolve,milliseconds)})
//     await deepu;
// }
const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const action = async () => {
    for (let i = 1; i < 5; i++) {
        console.log(`Round ${i}`)
        console.log('Waiting for 500ms')
        await sleep(5000)
        console.log('Posting')
    }
}

action();

module.exports = sleep;
