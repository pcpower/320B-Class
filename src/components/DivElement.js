// Import HTMLElement here
import HTMLElement from './HTMLElement.js';

// Define class here
class DivElement extends HTMLElement {

    constructor(content){
        super("div", content);

    }
    render() {
        return `<${'div'}>${this.content}</${'div'}>`;
    }

}
// Export class here
export default DivElement;