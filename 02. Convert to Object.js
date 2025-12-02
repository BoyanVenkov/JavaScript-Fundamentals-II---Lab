function convertToObject(text){
    const obj = JSON.parse(text)

    for(let entry of Object.entries(obj)){
           console.log(entry.join(": ")) 
    }
}