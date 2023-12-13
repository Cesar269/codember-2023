const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

console.log(distributeGifts(packOfGifts, reindeers)) // 2


function distributeGifts(packOfGifts, reindeers) {
    let packRegalos = 0
    let pesoRenos = 0
    packOfGifts.forEach(item => {
        packRegalos = packRegalos + item.length
    });
    reindeers.forEach(item => {
        pesoRenos = pesoRenos + item.length
    });
    
    return Math.trunc((pesoRenos*2)/packRegalos)
  }