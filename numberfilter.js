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
})

console.dir(newList, {'maxArrayLength':null})