const vendorOne = ["Pizza", "Pasta"];
const vendorTwo = ["Pizza", "Calzone"];
const vendorThree = ["Lobster"];
const vendorFour = ["Calzone"];

function makeUniqueMenu(...bigMenu) {
    let uniqueList = [];
    for (let smallMenu of bigMenu) {
        for (let item of smallMenu) {
            if (!uniqueList.includes(item)) {
                uniqueList.push(item);
            }
        }
    }
    return uniqueList
}

function makeMenuList(menu) {
    const menuList = document.querySelector("#menu");
    for (let dish of menu) {
        const dishNode = document.createElement("li");
        dishNode.textContent = dish;
        menuList.append(dishNode);
    }
}

const menu = makeUniqueMenu(vendorOne, vendorTwo, vendorThree, vendorFour);
const setMenu = makeUniqueMenuWithSet(vendorOne, vendorTwo, vendorThree, vendorFour);
makeMenuList(setMenu)

// Solution with Sets
function makeUniqueMenuWithSet(...menus) {
    let flatMenus = menus.flat()

    let uniqueMenu = new Set();
    flatMenus.forEach(item => uniqueMenu.add(item))
    return uniqueMenu
}