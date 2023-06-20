type ComponentOptions = {
    selector: string;
}

// Decorator Factory
function Component3(options: ComponentOptions) {
    return (constructor: Function) => {
        console.log('Component Decorator Called - ',constructor);
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('Inserting Component In The DOM');
        }
    }
}

@Component3({selector: '#my-profile'})
class ProfileComponent2 {

}

/*
Output :
Component Decorator Called -  [class ProfileComponent2]
*/