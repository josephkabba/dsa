//temprary
export const aboutText = `
        This is a website that helps you learn data structurces and alogarithms. These concepts help greatly in programming and software design at
        large. Without these skill one can't build efficient programs.
    `;


export const displayImages = [
    "https://miro.medium.com/max/5442/1*KpDOKMFAgDWaGTQHL0r70g.png",
    "https://www.studytonight.com/data-structures/images/merge-sort-working.png",
    "https://www.studytonight.com/data-structures/images/divide-conquer.png",
    "https://www.studytonight.com/data-structures/images/basic-quick-sort.png",
    "https://www.studytonight.com/data-structures/images/simple-selection-sort.png",
    "https://www.studytonight.com/data-structures/images/insertion-sort-stable-unstable.png",
    "https://www.studytonight.com/data-structures/images/basic-insertion-sort.png",
    "https://www.studytonight.com/data-structures/images/basic-bubble-sort.png",
    "https://www.studytonight.com/data-structures/images/enhanced-bubble-sort.png",
    "https://www.studytonight.com/data-structures/images/Jump%20Search%20technique.PNG",
    "https://www.studytonight.com/data-structures/images/comapring-a[10].PNG",
    "https://www.studytonight.com/data-structures/images/heap-binary-tree-example.png",
    "https://www.studytonight.com/data-structures/images/heap-property-example.png",
    "https://www.studytonight.com/data-structures/images/stack-data-structure.png",
    "https://www.studytonight.com/data-structures/images/stack-implementation.png",
    "https://www.studytonight.com/data-structures/images/introduction-to-queue.png",
    "https://www.studytonight.com/data-structures/images/implementation-of-queue.png",
    "https://www.studytonight.com/data-structures/images/3-step-removal.png",
    "https://www.studytonight.com/data-structures/images/linked-list-1.png",
    "https://www.studytonight.com/data-structures/images/linked-list-linear.png",
    "https://www.studytonight.com/data-structures/images/linked-list-circular.png",
    "https://www.studytonight.com/data-structures/images/linked-list-double.png",
    "https://www.studytonight.com/data-structures/images/double-ended-queue-1.png",
    "https://www.studytonight.com/data-structures/images/stack-using-queue-1.png",
    "https://www.studytonight.com/data-structures/images/introduction-to-binary-trees-1.png",
    "https://www.studytonight.com/data-structures/images/introduction-to-binary-trees-2.png",
    "https://www.studytonight.com/data-structures/images/introduction-to-binary-trees-3.png",
    "https://www.studytonight.com/data-structures/images/introduction-to-binary-trees-5.png",
    "https://www.studytonight.com/data-structures/images/introduction-to-binary-trees-6.png",
    "https://www.studytonight.com/data-structures/images/binary-search-tree-2.png",
];


export const explanation = {
    stack: `What is Stack Data Structure?

            Stack is an abstract data type with a bounded(predefined) capacity. It is a simple data structure that allows adding and removing elements in a particular order. Every time an element is added, it goes on the top of the stack and the only element that can be removed is the element that is at the top of the stack, just like a pile of objects.

            Basic features of Stack
            Stack is an ordered list of similar data type.
            Stack is a LIFO(Last in First out) structure or we can say FILO(First in Last out).
            push() function is used to insert new elements into the Stack and pop() function is used to remove an element from the stack. Both insertion and removal are allowed at only one end of Stack called Top.
            Stack is said to be in Overflow state when it is completely full and is said to be in Underflow state if it is completely empty.
            Implementation of Stack Data Structure
            Stack can be easily implemented using an Array or a Linked List. Arrays are quick, but are limited in size and Linked List requires overhead to allocate, link, unlink, and deallocate, but is not limited in size. Here we will implement Stack using array.

            Analysis of Stack Operations
            Below mentioned are the time complexities for various operations that can be performed on the Stack data structure.
            Push Operation : O(1)
            Pop Operation : O(1)
            Top Operation : O(1)
            Search Operation : O(n)
            The time complexities for push() and pop() functions are O(1) because we always have to insert or remove the data from the top of the stack, which is a one step process.
            `,

    queue: `What is a Queue Data Structure?
            Queue is also an abstract data type or a linear data structure, just like stack data structure, in which the first element is inserted from one end called the REAR(also called tail), and the removal of existing element takes place from the other end called as FRONT(also called head).
            The process to add an element into queue is called Enqueue and the process of removal of an element from queue is called Dequeue.


            Basic features of Queue
            Like stack, queue is also an ordered list of elements of similar data types.
            Queue is a FIFO( First in First Out ) structure.
            Once a new element is inserted into the Queue, all the elements inserted before the new element in the queue must be removed, to remove the new element.
            peek( ) function is oftenly used to return the value of first element without dequeuing it.
            Implementation of Queue Data Structure
            Queue can be implemented using an Array, Stack or Linked List. The easiest way of implementing a queue is by using an Array.
            Initially the head(FRONT) and the tail(REAR) of the queue points at the first index of the array (starting the index of array from 0). As we add elements to the queue, the tail keeps on moving ahead, always pointing to the position where the next element will be inserted, while the head remains at the first index.

            When we remove an element from Queue, we can follow two possible approaches (mentioned [A] and [B] in above diagram). In [A] approach, we remove the element at head position, and then one by one shift all the other elements in forward position.
            In approach [B] we remove the element from head position and then move head to the next position.
            In approach [A] there is an overhead of shifting the elements one position forward every time we remove the first element.
            In approach [B] there is no such overhead, but whenever we move head one position ahead, after removal of first element, the size on Queue is reduced by one space each time.
            Algorithm for ENQUEUE operation
            Check if the queue is full or not.
            If the queue is full, then print overflow error and exit the program.
            If the queue is not full, then increment the tail and add the element.
            Algorithm for DEQUEUE operation
            Check if the queue is empty or not.
            If the queue is empty, then print underflow error and exit the program.
            If the queue is not empty, then print the element at the head and increment the head.
            Complexity Analysis of Queue Operations
            Just like Stack, in case of a Queue too, we know exactly, on which position new element will be added and from where an element will be removed, hence both these operations requires a single step.
            Enqueue: O(1)
            Dequeue: O(1)
            Size: O(1)
            `,
    linkedlist: `Linear Linked List
                Linear Linked list is the default linked list and a linear data structure in which data is not stored in contiguous memory locations but each data node is connected to the next data node via a pointer, hence forming a chain.
                The element in such a linked list can be inserted in 2 ways:
                Insertion at beginning of the list.
                Insertion at the end of the list.
                Hence while writing the code for Linked List we will include methods to insert or add new data elements to the linked list, both, at the beginning of the list and at the end of the list.
                We will also be adding some other useful methods like:
                Checking whether Linked List is empty or not.
                Searching any data element in the Linked List
                Deleting a particular Node(data element) from the List
                Doubly Linked List
                Doubly linked list is a type of linked list in which each node apart from storing its data has two links. The first link points to the previous node in the list and the second link points to the next node in the list. The first node of the list has its previous link pointing to NULL similarly the last node of the list has its next node pointing to NULL.

                The two links help us to traverse the list in both backward and forward direction. But storing an extra link requires some extra space.
                Insert Data in the beginning
                The prev pointer of first node will always be NULL and next will point to front.
                If the node is inserted is the first node of the list then we make front and end point to this node.
                Else we only make front point to this node.

                Insert Data after a Node
                Let’s say we are inserting node Y after X. Then Y’s prev pointer will point to X and Y’s next pointer will point the node X’s next pointer is pointing. And X’s next pointer will now point to Y. We need to make sure that if X is the last node of list then after adding Y we make end point to Y.
                Insert Data in the end
                The next pointer of last node will always be NULL and prev will point to end.
                If the node is inserted is the first node of the list then we make front and end point to this node.
                Else we only make end point to this node.

                Remove a Node
                Removal of a node is quite easy in Doubly linked list but requires special handling if the node to be deleted is first or last element of the list. Unlike singly linked list where we require the previous node, here only the node to be deleted is needed. We simply make the next of the previous node point to next of current node (node to be deleted) and prev of next node point to prev of current node. Look code for more details.
                `,
    towerOfHanoi: `Data Structure & Algorithms - Tower of Hanoi

                    Tower of Hanoi, is a mathematical puzzle which consists of three towers (pegs) and more than one rings is as depicted −

                    These rings are of different sizes and stacked upon in an ascending order, i.e. the smaller one sits over the larger one. There are other variations of the puzzle where the number of disks increase, but the tower count remains the same.
                    Rules
                    The mission is to move all the disks to some another tower without violating the sequence of arrangement. A few rules to be followed for Tower of Hanoi are −
                    Only one disk can be moved among the towers at any given time.
                    Only the "top" disk can be removed.
                    No large disk can sit over a small disk.
                    Following is an animated representation of solving a Tower of Hanoi puzzle with three disks.

                    Tower of Hanoi puzzle with n disks can be solved in minimum 2n−1 steps. This presentation shows that a puzzle with 3 disks has taken 23 - 1 = 7 steps.
                    Algorithm
                    To write an algorithm for Tower of Hanoi, first we need to learn how to solve this problem with lesser amount of disks, say → 1 or 2. We mark three towers with name, source, destination and aux (only to help moving the disks). If we have only one disk, then it can easily be moved from source to destination peg.
                    If we have 2 disks −
                    First, we move the smaller (top) disk to aux peg.
                    Then, we move the larger (bottom) disk to destination peg.
                    And finally, we move the smaller disk from aux to destination peg.

                    So now, we are in a position to design an algorithm for Tower of Hanoi with more than two disks. We divide the stack of disks in two parts. The largest disk (nth disk) is in one part and all other (n-1) disks are in the second part.
                    Our ultimate aim is to move disk n from source to destination and then put all other (n1) disks onto it. We can imagine to apply the same in a recursive way for all given set of disks.
                    The steps to follow are −
                    Step 1 − Move n-1 disks from source to aux
                    Step 2 − Move nth disk from source to dest
                    Step 3 − Move n-1 disks from aux to dest
                    `,

    fibonnaci: `Data Structure & Algorithms Fibonacci Series


                Previous Page
                Next Page
                Fibonacci series generates the subsequent number by adding two previous numbers. Fibonacci series starts from two numbers − F0 & F1. The initial values of F0 & F1 can be taken 0, 1 or 1, 1 respectively.
                Fibonacci series satisfies the following conditions −
                Fn = Fn-1 + Fn-2
                Hence, a Fibonacci series can look like this −
                F8 = 0 1 1 2 3 5 8 13
                or, this −
                F8 = 1 1 2 3 5 8 13 21
                For illustration purpose, Fibonacci of F8 is displayed as −

                Fibonacci Iterative Algorithm
                First we try to draft the iterative algorithm for Fibonacci series.
                Procedure Fibonacci(n)
                declare f0, f1, fib, loop

                set f0 to 0
                set f1 to 1

                display f0, f1

                for loop ← 1 to n

                    fib ← f0 + f1
                    f0 ← f1
                    f1 ← fib

                    display fib
                end for

                end procedure
                `,

    factorial: `Factorial of a non-negative integer, is multiplication of all integers smaller than or equal to n.
                For example factorial of 6 is 6*5*4*3*2*1 which is 720.
                
                Recursive Solution:
                Factorial can be calculated using following recursive formula.
                        n! = n * (n-1)!
                        n! = 1 if n = 0 or n = 1
                        
                `
};

export const creators = [
    {
        name: "KATEREGGA ALEX",
        regNo: "19/U/16571/PS",
        studentNo: "1900716571",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/data-structures-project-93e56.appspot.com/o/IMG_20190227_143337%20(1).jpg?alt=media&token=c7cddb92-195a-4e99-a97d-c7c029e9d9bc",
        personality: `
                He is the group leader who was incharge of
                asssigning tasks.
                He particapted in data collection.
                He gathered the images used in this website
                and the content on this website.
                particapted in designing the user interfaces`,
    },

    {
        name: "SSEMAKULA JONATHAN",
        regNo: "19/U/0557",
        studentNo: "1900700557",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/data-structures-project-93e56.appspot.com/o/IMG-20201210-WA0035%20(2).jpg?alt=media&token=e85b202e-d04f-4846-8580-419c970f5543",
        personality: `
                He particapted in implementation of alogrithms.
                He gathered the videos used in this
                website.`,
    },

    {
        name: "KABBA JOSEPH TIMOTHY",
        regNo: "19/U/16467/EVE",
        studentNo: "1900716467",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/data-structures-project-93e56.appspot.com/o/WhatsApp%20Image%202021-05-08%20at%205.51.47%20PM.jpeg?alt=media&token=d4410af9-6d51-4e68-971c-301d6500c3a1",
        personality: `
                He particapted in the implementation of algorithms.
                He particapted in writing the codes.
                Particapted in designing the user interfaces.
                Hosted the project repository on github.`,
    },

    {
        name: "OJOK SIMON PETER",
        regNo: "18/U/2554/EVE",
        studentNo: "1800725554",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/data-structures-project-93e56.appspot.com/o/simon.jpeg?alt=media&token=98617785-e7fd-4ccb-b54d-a3d0575cf0bc",
        personality: `
                He particapted in implementation of algorithms.
                Particapted in writing the codes.`,
    },

    {
        name: "BARIYO DERRICK",
        regNo: "19/U/0122",
        studentNo: "1900700122",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/data-structures-project-93e56.appspot.com/o/DSC_7787.JPG?alt=media&token=1803c487-c8de-4a57-b615-9b5c0757f087",
        personality: "He particapted in data collection.",
    },


    {
        name: "NOOWE CHARLOTTE",
        regNo: "19/U/17693/PS",
        studentNo: "1900717693",
        imageURL: "https://firebasestorage.googleapis.com/v0/b/data-structures-project-93e56.appspot.com/o/88b4465222f34c7cb156b58ceadaa912%20(2).jpg?alt=media&token=f8c1ed81-03a6-4438-8a80-c798a8431030",
        personality: `
                She particapted in data collection.
                Particapted in designing the user
                interfaces.`,
    },


    {
        name: "NAVUMA WHITNEY",
        regNo: "1 9/U/1186",
        studentNo: "1900701186",
        imageURL: "",
        personality: `
                She particapted in data collection.
                contributed in the project .`,
    },
];