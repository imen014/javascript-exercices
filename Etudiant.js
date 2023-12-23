class Etudiant extends Personne{
    constructor(nom,age, niveau){
        super(nom,age);
        this.niveau = niveau;
    }

    age_call(){
        this.age += 1;
        alert('age call : ' + this.age);
    }


}

let etudiant1 = new Etudiant("ali 2", 25, "5inf");
etudiant1.afficher_details();
alert("avec le niveau : " + etudiant1.niveau);
etudiant1.age_call();
