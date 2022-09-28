// Iterative solution
function numPermutations(letters) {
    let total;
    for (let i = 1; i <= letters.length; i++) {
        if (total === undefined) {
            total = i;
            continue;
        }
        total *= i;
    }
    return total;
}

// Recursive solution
function recNumPermutations(letters) {
    if (letters.length === 1) {
        return 1;
    }
    return letters.length * recNumPermutations(letters.slice(1));
}