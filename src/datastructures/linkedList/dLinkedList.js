function NodeDL(element, next, prev) {
    this.element = element;
    this.next = null;
    this.prev = null;

    this.get_element = () => {
        return this.element;
    };

    this.get_next = () => {
        return next;
    };

    this.get_prev = () => {
        return prev;
    };

    this.set_element = (new_element) => {
        this.element = new_element;
    };

    this.set_next = (new_next) => {
        this.next = new_next;
    };

    this.set_prev = (new_prev) => {
        this.prev = new_prev;
    };
};

function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;

    this.add = (element) => {
        let node = new NodeDL(element, null, null);
        //to store current node
        let current;
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    };

    this.insertAt = (element, index) => {
        let current = this.head;
        let counter = 1;
        let node = new NodeDL(index);

        if (element === 0) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        else {
            while (current) {
                current = current.next;
                if (counter === element) {
                    node.prev = current.prev;
                    current.prev.next = node;
                    node.next = current;
                    current.prev = node;
                }
                counter++;
            }
        }
    };

    this.removeFrom = (index) => {
        let current = this.head;
        while (current) {
            if (current.data === index) {
                if (current === this.head && current === this.tail) {
                    this.head = null;
                    this.tail = null;
                }
                else if (current === this.head) {
                    this.head = this.head.next;
                    this.head.prev = null;
                }
                else if (current === this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                }
                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
            }
            current = current.next;
        }
    };

    this.removeElement = (element) => {
        let current = this.head;
        let counter = 1;

        if (element === 0) {
            this.head = this.head.next;
            this.head.prev = null;
        }
        else {
            while (current) {
                current = current.next;
                if (current === this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                }
                else if (counter === element) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    break;
                }
                counter++;
            }
        }
    };

    this.printList = () => {
        let curr = this.head;
        let lst = [];
        while (curr) {
            lst.push(curr.element);
            curr = curr.next;
        }
        return lst;
    };
}


export default DoublyLinkedList;