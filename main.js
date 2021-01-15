const Stack = require('./Stack')

function main() {
    //create a new stack called starTrek and add Kirk, Spock, McCoy and Scotty to the stack    
    const starTrek = new Stack();

    starTrek.push("Kirk");
    starTrek.push("Spock");
    starTrek.push("McCoy");
    starTrek.push("Scotty")

    // console.log(peek(starTrek));
    // console.log(isEmpty(starTrek));
    console.log(display(starTrek))
}

//peek should return the value of the item at the top of the stack
function peek(classObj) {
    if (classObj.top !== null) {
        return classObj.top.data;
    }
}

//isEmpty should return true of the stack is empty, otherwise false
function isEmpty(classObj) {
    if (classObj.top === null) {
        return true;
    }
    else {
        return false;
    }
}

//
function display(classObj) {
    let result = "";
    let currentNode = classObj.top
    while (currentNode !== null) {
        result += `${currentNode.data}, `
        currentNode = currentNode.next;
    }

    console.log(result)
}


main();