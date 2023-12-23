class Personne{
  
     constructor(nom, age){
        this.nom = nom;
        this.age = age;
    }

    afficher_details() {
        alert(this.nom + " a : " + this.age + " ans !");
        
    }

}

let personne1 = new Personne("ali",28);
alert(personne1.nom);
alert(personne1.age);
personne1.afficher_details();


