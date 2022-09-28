// Using a class
class User {
    #username;
    #password;

    constructor(username, password, age) {
        this.#username = username;
        this.#password = password;
        this.age = age;
    }
}

// Using Symbols
const username = Symbol("username");
const password = Symbol("password");

const user = {
    [username]: "Coolbylaki",
    [password]: "Nemam pojma",
    age: 24
}