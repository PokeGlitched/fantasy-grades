function calculateCategory(earned, possible){  
    if (possible === 0) {
        return "Category Inactive"
    } else {
        return earned/possible * 100    
    }
}