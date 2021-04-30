export default function StackImpl() {

    let items = [];

    this.push = function (element) {
        items.push(element);
    };

    this.popElement = function () {
        return items.pop(items.length - 1);
    };

    this.peek = function () {
        return items[items.length - 1];
    };

    this.isEmpty = function () {
        return items.length === 0;
    };

    this.size = function () {
        return items.length;
    };

    this.allItems = function () {
        return items;
    };
}