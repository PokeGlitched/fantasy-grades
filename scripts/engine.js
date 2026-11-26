function calculateCategory(earned, possible){  
    if (possible === 0) {
        return "Category Inactive"
    } else {
        return earned/possible * 100    
    }
}

let categoryPercent = calculateCategory(40, 50)
console.log(categoryPercent)

if (typeof categoryPercent === "string") {
    
} else if (typeof categoryPercent === "number") {

}