class ArrayUtils {
    static wrapInArray<T>(value: T){
        return [value];
    }
}

console.log(ArrayUtils.wrapInArray<number>(1));

/*
Output :
[ 1 ]
*/