// The Never Type
function reject(message: string): never {
    throw new Error(message);
}

function processEvents(): never {
    while (true) {
        // ...
    }
}

// processEvents();
reject('Error');
console.log('Done');

/*
Output :
Error: Error
*/