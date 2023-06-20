type ComponentOptions2 = {
    selector: string;
}

// Decorator Factory
function Component4(options: ComponentOptions2) {
    return (constructor: Function) => {
        console.log('Component Decorator Called - ',constructor);
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting Component In The DOM');
        }
    }
}

function Pipe(constructor: Function) {
    console.log('Pipe Decorator Called - ',constructor);
    constructor.prototype.pipe = true;
}

@Component4({selector: '#my-profile'})
@Pipe
class ProfileComponent3 {

}

/*
Output :
Pipe Decorator Called -  [class ProfileComponent3]
Component Decorator Called -  [class ProfileComponent3]
*/