console.log("Início");

setTimeout(() => console.log("Timeout"), 2000);

Promise.resolve().then(() => console.log("Primeira"));

Promise.resolve().then(() => console.log("Segunda"));

setTimeout(() => console.log("Timeout"), 5000);

setTimeout(() => console.log("Timeout"), 7000);


console.log("Fim");