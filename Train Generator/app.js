const trainBtn = document.querySelector("#train");

function* getStop() {
    yield "Poughkeepsie";
    yield "Newburgh";
    yield "Peekskill";
    yield "Yonkers";
    yield "Bronx";
    yield "Grand Central";
}

const nycTrainLine = getStop();

trainBtn.addEventListener("click", () => {
    let currStop = nycTrainLine.next();

    if (currStop.done === true) {
        console.log("We have made it!");
        trainBtn.disabled = true;
    } else {
        console.log(`Next stop is ${currStop.value}!`);
    }
})