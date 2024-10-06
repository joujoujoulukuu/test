const stringJson = '{"D": "1.25", "U": "1.52"}';
const string = "1.25-1.52";

const extractJson = (stringJson) => {
    const json = JSON.parse(stringJson);
    return {D: json.D, U: json.U};
}

const extractString = (string) => {
    const [D, U] = string.split("-");
    return {D, U};
}

const runTest = (testFn, label, iterations, runs) => {
    const times = [];
    for (let r = 0; r < runs; r++) {
        const start = performance.now();
        for (let i = 0; i < iterations; i++) {
            testFn();
        }
        const end = performance.now();
        times.push(end- start);
        console.log(`${r} of ${runs} is ${(end - start).toFixed(4)}ms`)
    }
    const avgTime = times.reduce((a, b) => a +b, 0) / runs;
    console.log(`${label}: Average time over ${runs} -> ${avgTime.toFixed(4)}ms`);
};

const iterations = 1000000;
const runs = 10;

console.log("Starting performance tests:");

runTest(() => extractJson(stringJson), "JSON Parse", iterations, runs);
runTest(() => extractString(string), "String Split", iterations, runs);



/*
console.time("JSON");
for (let i = 0; i < 1000000; i++) {
    extractJson(stringJson);
}
console.timeEnd("JSON");

console.time("stringV");
for (let i = 0; i < 1000000; i++) {
    extractString(string);
}
console.timeEnd("stringV");*/