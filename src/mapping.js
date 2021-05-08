import Factorial from "./main/Topics/Factorial";
import Fibonnaci from "./main/Topics/Fibonnaci";
import Stack from "./main/Topics/Stack";
import Queue from "./main/Topics/Queue";
import LinkedList from "./main/Topics/LinkedList";
import TowerOfHanoi from "./main/Topics/TowerOfHanoi";
import { explanation } from "./data/data";

const mapping = {
    fibonnaci: {
        name: "fibonnaci",
        description: explanation.fibonnaci,
        video: "https://www.youtube.com/watch?v=wTlw7fNcO-0",
        impl: Fibonnaci,
    },

    factorial: {
        name: "factorial",
        description: explanation.factorial,
        video: "https://www.youtube.com/watch?v=pxh__ugRKz8",
        impl: Factorial
    },

    towerOfHanoi: {
        name: "tower Of hanoi",
        description: explanation.towerOfHanoi,
        video: "https://www.youtube.com/watch?v=YstLjLCGmgg",
        impl: TowerOfHanoi
    },

    queue: {
        name: "queue",
        description: explanation.queue,
        video: "https://www.youtube.com/watch?v=XuCbpw6Bj1U",
        impl: Queue
    },

    stack: {
        name: "stack",
        description: explanation.stack,
        video: "https://www.youtube.com/watch?v=FNZ5o9S9prU",
        impl: Stack
    },

    LinkedList: {
        name: "linkedList",
        description: explanation.linkedlist,
        video: "https://www.youtube.com/embed/DWpVGpNfDmM",
        impl: LinkedList
    },
};

export default mapping;