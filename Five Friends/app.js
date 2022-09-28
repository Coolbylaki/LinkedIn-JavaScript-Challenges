const URL = "https://randomuser.me/api/?results=5";

async function getUsers() {
    let people = await fetch(URL);
    let data = await people.json();

    const timeline = document.querySelector("#timeline");
    data.results.forEach(person => {
        let image = document.createElement("img");
        image.src = person.picture.large;
        timeline.appendChild(image);
    })
}