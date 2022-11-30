const item = [ {name: 'Bike', price:100}, 
{name: 'TV', price:200}, {name: 'Album', price:10}, 
{name: 'Book', price:5}, {name: 'Phone', price:500},
 {name: 'Computer', price:1000}, ]

 const cheapProduct=item.filter(item=>item.price<=5);
const expensiveProduct=item.filter(item=>item.price==1000) 
const sumProduct=item.reduce((acc,curr)=>{
return acc+=curr.price
},0)
const allProduct=item.filter(item=>item.price>=10).reduce((acc,curr)=>{
    return acc+=curr.price
},0)




console.log(`The cheapest product is:`,cheapProduct)
console.log(`The expensive product is:`,expensiveProduct)
console.log(`The sum of all product is`,sumProduct)
console.log(`The sum of all product except those under 10$ is`,allProduct)