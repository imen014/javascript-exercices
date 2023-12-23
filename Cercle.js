class Cercle{
    constructor(rayon){
        this.rayon = rayon;
    }
    calcul_aire(){
        let aire = Math.pow(this.rayon, 2);
        return aire;
    }
    
}

let cercle1 = new Cercle(3);
let aire_1 = cercle1.calcul_aire();
alert("aire de cercle : " + aire_1);