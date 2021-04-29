export default function Stack() {

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

    this.print = function () {
        let str = "";
        for (let i = 0; i < items.length; i++) {
            str += items[i] + "  ||  ";
        }
        return str;
    };
}