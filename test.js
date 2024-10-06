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

console.time("JSON");
for (let i = 0; i < 1000000; i++) {
    extractJson(stringJson);
}
console.timeEnd("JSON");

console.time("stringV");
for (let i = 0; i < 1000000; i++) {
    extractString(string);
}
console.timeEnd("stringV");