const yil = 2000;

const yuzyilBul = (yil) => {
    if(yil%100==0) {
        return `Girdiginiz tarih ${Math.floor(yil/100)}. yuzyila aittir.`
    }
    else {
        return `Girdiginiz tarih ${Math.floor(yil/100)+1}. yuzyila aittir.`
    }
}

console.log(yuzyilBul(yil))