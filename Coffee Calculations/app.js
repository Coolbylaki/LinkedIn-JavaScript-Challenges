// Use reduce to calculate total bill from a trip to a coffee shop!
function calculateTotal(orders, price) {
    let total = orders.reduce((previousValue, currentValue) => previousValue + currentValue) * price
    return `The total bill is $${total}`
}

const coffeeOrders = [2, 3, 1, 5];
const coffeePrice = 1.25

console.log(calculateTotal(coffeeOrders, coffeePrice))