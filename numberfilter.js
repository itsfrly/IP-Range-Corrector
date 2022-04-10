const ipArrForm = document.getElementById("ipArrForm");
document.getElementById("ipArrForm").onsubmit = function() {
    console.log()
}
const ipArr = []

newList=[]
ipArr.forEach(x => {
   
   let octets = x.replace('-', '.').split('.')
   console.log(octets)
   
    if(octets.length > 4){
        lastOctet1 = octets[3]
        lastOctet2 = octets[7]
        for(let i = lastOctet1; i < lastOctet2; i++){
            newList.push(`${octets[0]}.${octets[1]}.${octets[2]}.${i}`)
        }
    }
    else{
        newList.push(x)
    }
    
   /* let octet=1
    let lastOctet2 = []
    let lastOctet = []
    let currentObject = x //current element of array
    for(let i=0; i < currentObject.length; i++) { //iterate through numbers in ip
        if(currentObject.length > 12){ //All the magic happens in here
            if(currentObject[i] === '.'){
                    octet += 1
                    if(octet === 4 ){ //once in 4th octet
                        lastOctet.push(currentObject[i])
                    }
                    if(octet === 8){
                        lastOctet2.push(currentObject[i])
                    }
                }
            }
        }
    console.log(lastOctet)
    console.log(lastOctet2)    
    for(let j=lastOctet; j < lastOctet2; j++){
    
    } */
})

console.dir(newList, {'maxArrayLength':null})