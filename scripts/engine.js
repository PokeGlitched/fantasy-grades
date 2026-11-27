function calculateCategory(earned, possible){  
    if (possible === 0) {
        return null
    } else {
        return Number((earned/possible * 100).toFixed(2))    
    }
}

let categoryPercent = calculateCategory(0, 10)
console.log(categoryPercent)

if (categoryPercent !== null) {
    console.log("hi")
} else {
    console.log("bye")
}