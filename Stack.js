class _Node {

    //creates a node containing the data and a reference to the next item
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

//remember that classes are templates for creating objects. They encapsulate data with code to work on that data
class Stack {

    //constructor method is a special method for creating and initializing an object created with a class
    //start with an empty 1st node represented by "null" and this indicates the top of the stack
    constructor() {
        this.top = null;
    }

    //Push - data insertion operation to place data onto the top of a stack
    push(data) {
        //if the stack is empty, then the node will be the top of the stack
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        //if the stack already has something, then create a new node, add data to the new node, and have the pointer point to the top
        const node = new _Node(data, null);
        this.top = node;
    }

    //Pop - data removal operation to remove data from the top of a stack
    pop() {
        //in order to remove the top of the stack, you have to point the pointer to the next item and that next item become the top of the stack
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}



module.exports = Stack;