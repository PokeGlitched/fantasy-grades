let category = {
    name: "Tests",
    earned: 0,
    possible: 10,
    weight: 60
}

function calculateCategory(category){  
    if (category.possible === 0) {
        return null
    } else {
        return Number((category.earned / category.possible * 100))    
    }
}

let categoryPercent = calculateCategory(category)

console.log(categoryPercent)

if (categoryPercent !== null) {
    console.log("hi")
} else {
    console.log("bye")
}