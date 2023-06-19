interface Result<T> {
    data: T,
    error: string | null
}

function fetch<T>(_url: string): Result<T> {
    return {
        data: {} as T,
        error: null
    }
}

interface User {
    username: string;
}

interface Product {
    title: string;
}

let result = fetch<User>('url');
result.data.username;

let result2 = fetch<Product>('url');
result2.data.title;