export default function Queue() {

    let items = [];

    this.enqueue = (element) => {
        items.push(element);
    };

    this.dequeue = () => {
        if (this.isEmpty())
            return "QUEUE IS EMPTY";
        return items.shift();
    };

    this.size = () => {
        return items.length;
    };

    this.front = () => {
        if (this.isEmpty())
            return "QUEUE IS EMPTY";
        return items[0];
    };

    this.isEmpty = () => {
        return items.length === 0;
    };

    this.printQueue = () => {
        var str = "";
        for (var i = 0; i < items.length; i++) {
            str += items[i] + "  ||  ";
        }
        return str;
    };
}