function Node(element, next) {

    this.element = element;
    this.next = null;

    this.get_element = () => {
        return this.element;
    };

    this.get_next = () => {
        return next;
    };

    this.set_element = (new_element) => {
        this.element = new_element;
    };

    this.set_next = (new_next) => {
        this.next = new_next;
    };
};


function SinglylinkedList() {

    this.head = null;
    this.size = 0;

    this.add = (element) => {
        const node = new Node(element);
        //to store current node
        let current;
        if (this.head === null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    };

    this.insertAt = (element, index) => {
        let next = null;
        if (index > 0 && index > this.size)
            return false;
        else {
            let node = new Node(element, next), prev;
            let curr = prev;
            curr = this.head;

            if (index === 0) {
                node.next = this.head;
                this.head = node;
            }
            else {
                let curr = this.head;
                let it = 0;

                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    };

    this.removeFrom = (index) => {
        if (index > 0 && index > this.size)
            return -1;
        else {
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            if (index === 0) {
                this.head = curr.next;
            }
            else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;
            //return thr removed element
            return curr.element;
        }
    };


    this.indexOf = (element) => {
        let count = 0;
        let current = this.head;

        while (current != null) {
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        return -1;
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



export default SinglylinkedList;