function clock() {
    const clockNode = document.querySelector("#clock");
    const headingTwo = document.createElement("h2")
    clockNode.append(headingTwo);

    return setInterval(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        headingTwo.textContent = time;
    }, 1000);
}

clock();