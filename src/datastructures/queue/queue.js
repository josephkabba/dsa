export default function QueueImpl() {

    let items = [];

    this.enqueue = (element) => {
        items.push(element);
    };

    this.dequeue = () => {
        if (this.isEmpty()) {
            return;
        }
        return items.shift();
    };

    this.size = () => {
        return items.length;
    };

    this.front = () => {
        if (this.isEmpty()) {
            return;
        }
        return items[0];
    };

    this.isEmpty = () => {
        return items.length === 0;
    };

    this.allItems = () => {
        return items;
    };
}