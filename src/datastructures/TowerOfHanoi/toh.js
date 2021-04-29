let discs;
let sourceBar;
let auxBar;
let destBar;
let moves_list = [];

$("#start").click(function () {
    const disks = document.getElementById("discnoBox").value;
    sourceBar = document.getElementById("startBox").value;
    auxBar = document.getElementById("auxBox").value;
    destBar = document.getElementById("destBox").value;
    discs = disks;

    toh(disks, sourceBar, auxBar, destBar);
    console.log("moves_list: ", moves_list);
    start();

});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toh(disks, source, aux, dest) {
    if (disks > 0) {
        toh(disks - 1, source, dest, aux);
        moves_list.push([source, dest]);
        toh(disks - 1, aux, source, dest);
    }
}

async function start() {
    var source = sourceBar, aux = auxBar, dest = destBar, disks = discs;
    var startBar;
    var startBarItems = "";
    var auxBarItems = "";
    var destBarItems = "";
    var movesList = moves_list;
    var barObj = {};
    var startList = [];
    var auxList = [];
    var destList = [];

    var srcAuxDestList = [source, aux, dest];
    console.log(srcAuxDestList);

    for (let s = 0; s < 3; s++) {
        if (s === 0) {
            barObj[srcAuxDestList[s]] = startList;
        } else if (s === 1) {
            barObj[srcAuxDestList[s]] = auxList;
        } else if (s === 2) {
            barObj[srcAuxDestList[s]] = destList;
        }
    }

    console.log(barObj);

    var newDiskList = [];
    for (var i = 0; i < disks; i++) {
        newDiskList.push("<li id='disc" + (i + 1) + "' value='1'></li>");
    }
    newDiskList.reverse();
    for (let i = 0; i < disks; i++) {
        barObj[source].push(newDiskList[i]);
    }

    if (source === 0) {
        startBar = 1;
    } else if (source === 1) {
        startBar = 2;
    } else if (source === 2) {
        startBar = 3;
    }
    for (let i = 0; i < startList.length; i++) {
        startBarItems = startBarItems + barObj[source][i];
    }

    document.getElementById("l" + startBar).innerHTML = startBarItems;

    await sleep(3000);

    for (let i = 0; i < movesList.length; i++) {
        let poppedListLength;
        let pushedListLength;
        let poppedListId;
        let pushedListId;
        let poppedItem;

        // POPPING
        if (movesList[i][0] === 0) {
            const poppedItem = barObj[0].pop();
            poppedListLength = barObj[0].length;
            startBarItems = "";
            poppedListId = 1;
        } else if (movesList[i][0] === 1) {
            const poppedItem = barObj[1].pop();
            poppedListLength = barObj[1].length;
            auxBarItems = "";
            poppedListId = 2;
        } else if (movesList[i][0] === 2) {
            const poppedItem = barObj[2].pop();
            poppedListLength = barObj[2].length;
            destBarItems = "";
            poppedListId = 3;
        }

        for (var n = 0; n < poppedListLength; n++) {
            if (movesList[i][0] === 0) {
                startBarItems = startBarItems + barObj[0][n];
            } else if (movesList[i][0] === 1) {
                auxBarItems = auxBarItems + barObj[1][n];
            } else if (movesList[i][0] === 2) {
                destBarItems = destBarItems + barObj[2][n];
            }
        }

        await sleep(1000);
        // PUSHING
        if (movesList[i][1] === 0) {
            barObj[0].push(poppedItem);
            pushedListLength = barObj[0].length;
            pushedListId = 1;
            startBarItems = "";
        } else if (movesList[i][1] === 1) {
            barObj[1].push(poppedItem);
            pushedListLength = barObj[1].length;
            pushedListId = 2;
            auxBarItems = "";
        } else if (movesList[i][1] === 2) {
            barObj[2].push(poppedItem);
            pushedListLength = barObj[2].length;
            pushedListId = 3;
            destBarItems = "";
        }
        // update the rings
        for (var m = 0; m < pushedListLength; m++) {
            if (pushedListId === 1) {
                startBarItems = startBarItems + barObj[0][m];
            } else if (pushedListId === 2) {
                auxBarItems = auxBarItems + barObj[1][m];
            } else if (pushedListId === 3) {
                destBarItems = destBarItems + barObj[2][m];
            }
        }

        if (poppedListId === 1) {
            document.getElementById("l" + poppedListId).innerHTML = startBarItems;
        } else if (poppedListId === 2) {
            document.getElementById("l" + poppedListId).innerHTML = auxBarItems;
        } else if (poppedListId === 3) {
            document.getElementById("l" + poppedListId).innerHTML = destBarItems;
        }

        if (pushedListId === 1) {
            document.getElementById("l" + pushedListId).innerHTML = startBarItems;
        } else if (pushedListId === 2) {
            document.getElementById("l" + pushedListId).innerHTML = auxBarItems;
        } else if (pushedListId === 3) {
            document.getElementById("l" + pushedListId).innerHTML = destBarItems;
        }
    }
}
