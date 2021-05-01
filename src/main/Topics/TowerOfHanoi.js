import { useState, useEffect, useRef } from "react";
import "../../assets/Bar.png";
import Bar2 from "../../assets/Bar2.png";
import "../../style/tower.css";


const types = {
    discs: "discs",
    start: "start",
    aux: "aux",
    dest: "dest"
};

let myTimer = null;
let moveInfo;
let moveInc = 1;
let speed;

let callStack;

let barsInfo = [{}, {}, {}, {}, {}];

let diskPosTop, diskPosLeft, DiskID;

const Hanoi = (n, from, to, via) => {

    if (n === 0) return;

    Hanoi(n - 1, from, via, to);
    // moveDisk(from,to);

    callStack.push([from, to]); // save parameters to callStack array
    Hanoi(n - 1, via, to, from);

};

const executeHanoi = (diskCount, disk0, disk1, disk2, disk3, disk4) => {
    // alert(diskCount);
    // var diskCount =3;

    for (let i = 0; i < 5; i++) {
        DiskID[i].current.style.top = diskPosTop[i];
        DiskID[i].current.style.left = diskPosLeft[i];
    }


    barsInfo[0].disks = ["disk0", "disk1", "disk2", "disk3", "disk4"];
    //alert(barsInfo[0].disks.pop().id);
    barsInfo[1].disks = [];
    barsInfo[2].disks = [];
    barsInfo[3].disks = [];
    barsInfo[4].disks = [];

    switch (diskCount) {
        case 3: barsInfo[0].disks.pop(); barsInfo[0].disks.pop();
            disk3.current.style.display = "none"; disk4.current.style.display = "none"; break;

        case 4: barsInfo[0].disks.pop();
            disk4.current.style.display = "none"; break;

        default:
            return;
    }

    callStack = [];  // callStack array is global

    Hanoi(diskCount, 0, 2, 1);

    moveDisk(); // moveDisk takes its parameters from callStack
};




const moveDisk = () => {
    if (callStack.length === 0) return;

    let param = callStack.shift();  // Get call parameters from callStack
    // Note: throughout the code, I use fromBar, toBar to refer to towers
    let fromBar = param[0];
    let toBar = param[1];

    let elem = document.getElementById(barsInfo[fromBar].disks.pop());  // find top elemnet in fromBar

    moveInfo = {
        elem: elem,
        fromBar: fromBar,
        toBar: toBar,
        whichPos: "top", // element position property for movement
        dir: -1,  // 1 or -1
        state: "up", // move upward
        endPos: 60    // end position (in pixels) for move upward
    };

    myTimer = setInterval(animateMove, speed); // Start animation
};

const animateMove = () => {
    let elem = moveInfo.elem;
    let dir = moveInfo.dir;

    let pos = parseInt(elem[(moveInfo.whichPos === "left") ? "offsetLeft" : "offsetTop"]);

    if (((dir === 1) && (pos >= moveInfo.endPos)) || ((dir === -1) && (pos <= moveInfo.endPos))) {  // alert(moveInfo.state); 
        if (moveInfo.state === "up") {
            moveInfo.state = "hor";
            moveInfo.whichPos = "left";
            moveInfo.dir = 1;
            if (moveInfo.fromBar > moveInfo.toBar) moveInfo.dir = -1;
            //alert("toBar:" + moveInfo.toBar);
            let toBar = document.getElementById("bar" + moveInfo.toBar);
            // Next line: 15px is half of tower width    
            moveInfo.endPos = toBar.offsetLeft - Math.floor(elem.offsetWidth / 2) + 15;
            return;
        }

        else if (moveInfo.state === "hor") // move down
        {
            moveInfo.state = "down";
            moveInfo.whichPos = "top";
            moveInfo.dir = 1;
            //alert(elem.offsetHeight);
            moveInfo.endPos = document.getElementById("bottombar").offsetTop - (barsInfo[moveInfo.toBar].disks.length + 1) * elem.offsetHeight;
            return;
        }

        else // end of current call to moveDisk, issue next call
        {
            clearInterval(myTimer);  // cancel timer 
            barsInfo[moveInfo.toBar].disks.push(elem.id);
            moveDisk();
            return;
        }
    }


    // Move Disk
    pos = pos + dir * moveInc;
    elem.style[moveInfo.whichPos] = pos + "px";

    // Move the inside middle image
    if (moveInfo.state === "up") {
        let fromBar = document.getElementById("bar" + moveInfo.fromBar);
        if (elem.offsetTop < fromBar.offsetTop) {
            let x = elem.getElementsByClassName("insideImg")[0].offsetHeight;
            if (x > 0) elem.getElementsByClassName("insideImg")[0].style.height = x - moveInc + "px";
        }
    }

    if (moveInfo.state === "down") {
        var toBar = document.getElementById("bar" + moveInfo.toBar);
        if (elem.offsetTop > toBar.offsetTop) {
            let x = elem.getElementsByClassName("insideImg")[0].offsetHeight;
            if (x < 14) elem.getElementsByClassName("insideImg")[0].style.height = x + moveInc + "px";
        }
    }

};


function TowerOfHanoi() {
    const [Value, setValue] = useState(5);
    const disk0 = useRef();
    const disk1 = useRef();
    const disk2 = useRef();
    const disk3 = useRef();
    const disk4 = useRef();

    const onChangeValue = (value) => {
        setValue(value);
    };

    const submit = (e) => {
        e.preventDefault();

        diskPosTop = [];
        diskPosLeft = [];
        DiskID = [disk0, disk1, disk2, disk3, disk4];

        for (let i = 0; i < 5; i++) {
            diskPosTop[i] = DiskID[i].current.style.top;
            diskPosLeft[i] = DiskID[i].current.style.left;
        }


        executeHanoi(parseInt(Value), disk0, disk1, disk2, disk3, disk4);
    };

    return (<div className="flex flex-col items-center">

        <div id="container" className="flex flex-col rounded shadow p-5">


            <div id="bar0"><img src={Bar2} alt="" /></div>

            <div id="bar1"><img src={Bar2} alt="" /></div>

            <div id="bar2"><img src={Bar2} alt="" /></div>
            <div id="bottombar"></div>

            <div class="disk" ref={disk0} id="disk0" ><img class="insideImg left-24" alt="" src="Bar2.png" /></div>
            <div class="disk" ref={disk1} id="disk1" ><img class="insideImg left-20" alt="" src="Bar2.png" /></div>
            <div class="disk" ref={disk2} id="disk2" ><img class="insideImg left-14" alt="" src="Bar2.png" /></div>
            <div class="disk" ref={disk3} id="disk3" ><img class="insideImg left-8" alt="" src="Bar2.png" /></div>
            <div class="disk" ref={disk4} id="disk4" ><img class="insideImg left-3" alt="" src="Bar2.png" /></div>
        </div>

        <form onSubmit={submit} className="flex flex-col mt-96 rounded shadow p-5">

            <label className="font-bold text-lg mt-3 text-primary capitalize">Select number of discs</label>
            <select id="diskSelectList" onChange={(e) => onChangeValue(e.target.value)} className="align-text-top mt-1 bg-white focus:outline-none block w-full  text-gray-700 placeholder-gray-500 border p-2 border-gray-200 rounded-md" name="end" id="end">
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <button className="rounded-xl md:text-lg text-sm w-full shadow-md mt-5 px-2 py-2 bg-primary text-white font-bold hover:bg-secondary focus:outline-none" type='submit'>Run</button>
        </form>

    </div>);
}

export default TowerOfHanoi;