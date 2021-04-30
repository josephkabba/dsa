const fib = (value) => {
    if (value <= 1) {
        return value;
    }
    else {
        return fib(value - 1) + fib(value - 2);
    }
};

export default fib;