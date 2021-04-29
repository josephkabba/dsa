const fact = (num) => {
    if (num === 1) {
        return num;
    }
    else if (num < 1) {
        return 0;
    }
    else
        return num * fact(num - 1);
}

export default fact;