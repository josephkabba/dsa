import Factorial from "./main/Topics/Factorial";
import Fibonnaci from "./main/Topics/Fibonnaci";
import Stack from "./main/Topics/Stack";
import Queue from "./main/Topics/Queue";
import LinkedList from "./main/Topics/LinkedList";

const mapping = {
    fibonnaci: {
        name: "fibonnaci",
        description: "",
        video: "",
        impl: Fibonnaci,
    },

    factorial: {
        name: "factorial",
        description: "",
        video: "",
        impl: Factorial
    },

    towerOfHanoi: {
        name: "tower Of hanoi",
        description: "",
        video: "",
        impl: null
    },

    queue: {
        name: "queue",
        description: "",
        video: "",
        impl: Queue
    },

    stack: {
        name: "stack",
        description: "",
        video: "",
        impl: Stack
    },

    LinkedList: {
        name: "linkedList",
        description: "",
        video: "",
        impl: LinkedList
    },
};

export default mapping;