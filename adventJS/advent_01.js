const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */


function wrapping(gifts) {
    const regalo = []
    let envoltura1
    let envoltura2

    gifts.forEach(item => {
        envoltura1 = "**\n*"
        envoltura2 = "*\n**"
        for (i = 1; i <= item.length; i++) {
            envoltura1 = "*" + envoltura1
            envoltura2 = envoltura2 + "*"
        }
        regalo.push(envoltura1 + item + envoltura2)
    });

    return regalo
} 