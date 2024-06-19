console.log('A');

setTimeout(() => {console.log('B');});

['C', 'D'].forEach((X) => console.log(X));

console.log('E');

// output --> A  C  D  E  B