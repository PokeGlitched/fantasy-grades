let category1 = {
    name: "Tests",
    earned: 0,
    possible: 10,
    weight: 60
}

let category2 = {
    name: "HW",
    earned: 10,
    possible: 0,
    weight: 60
}

let category3 = {
    name: "Lab",
    earned: 95,
    possible: 100,
    weight: 60
}

let categories = [
    category1,
    category2,
    category3
]

let categoryResults = [
]

function calculateCategory(category){  
    if (category.possible === 0) {
        return null
    } else {
        return Number((category.earned / category.possible * 100))    
    }
}

for (let i = 0; i < categories.length; i++) {
    let currentCat = categories[i]
    let categoryPercent = calculateCategory(currentCat)
    
    if (categoryPercent !== null) {
        console.log(`${currentCat.name}: ${categoryPercent}%, Active`)
        categoryResults.push({name: currentCat.name, value: categoryPercent})
    } else {
        console.log(`${currentCat.name}: Inactive`)
        categoryResults.push({name: currentCat.name, value: null})
    }
}

console.log(categoryResults)

