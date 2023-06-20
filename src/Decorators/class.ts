// class Component {
//     insertInDOM() {}
// }

function Component(constructor: Function) {
    console.log('Component Decorator Called - ',constructor);
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('Inserting Component In The DOM');
    }
}

@Component
class ProfileComponent {

}

/*
Output :
Component Decorator Called -  [class ProfileComponent]
*/