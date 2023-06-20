type WatchedParameter = {
    methodName: string,
    parameterIndex: number
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
    watchedParameters.push({
        methodName,
        parameterIndex
    });
}

class Vehicle {
    move(@Watch speed: number) {
        console.log(`Vehicle is moving at ${speed} km/h`)
    }
}

console.log(watchedParameters);

/*
Output :
[
    { methodName: 'move', parameterIndex: 0 }
]
*/