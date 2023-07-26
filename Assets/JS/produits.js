class Chevre {
    constructor(id,img,name,showmore, prix, description) {
        this.id = id;
        this.img=img;
        this.name=name;
        this.prix = prix;
        this.description = description;
        this.showmore = showmore;
        this.type = "chevre";
    }

    setDateDeReservation(dateDeReservation) {
        this.dateDeReservation = dateDeReservation;
    }

    setDateDeRetour(dateDeRetour) {
        this.dateDeRetour = dateDeRetour;
    }

    calculateTotal() {
        let oneDay = 1000 * 60 * 60 * 24;
        let difference = Math.round(
          this.dateDeRetour.getTime() - this.dateDeReservation.getTime()
        );

        let total = this.prix * (difference / oneDay);
        this.total = total;
    }
}
// ajouter description

let chevres = [
    new Chevre (0,"../Assets/Images/chevres/Images_Chevres/Chèvre n°1.jpeg","Emeline","Voir d'avantage",20),
    new Chevre (1,"../Assets/Images/chevres/Images_Chevres/Chèvre n°2.jpeg","Kessy","Voir d'avantage",40),
    new Chevre (2,"../Assets/Images/chevres/Images_Chevres/Chèvre n°3.jpeg","Mano","Voir d'avantage",20),
    new Chevre (3,"../Assets/Images/chevres/Images_Chevres/Chèvre n°4.jpeg","Mathieu","Voir d'avantage",20),
    new Chevre (4,"../Assets/Images/chevres/Images_Chevres/Chèvre n°5.jpeg","Hossein","Voir d'avantage",30),
    new Chevre (5,"../Assets/Images/chevres/Images_Chevres/Chèvre n°6.jpeg","Alex","Voir d'avantage",40),
    new Chevre (6,"../Assets/Images/chevres/Images_Chevres/Chèvre n°7.webp","Dan","Voir d'avantage",20),
    new Chevre (7,"../Assets/Images/chevres/Images_Chevres/Chèvre n°8.jpeg","David","Voir d'avantage",40),
    new Chevre (8,"../Assets/Images/chevres/Images_Chevres/Chèvre n°9.jpeg","Romain","Voir d'avantage",30),
    new Chevre (9,"../Assets/Images/chevres/Images_Chevres/Chèvre n°10.jpeg","Luca","Voir d'avantage",20),
    new Chevre (10,"../Assets/Images/chevres/Images_Chevres/Chèvre n°11.jpeg","Gaëlle","Voir d'avantage",40),
    new Chevre (11,"../Assets/Images/chevres/Images_Chevres/Chèvre n°12.jpg","Adrien","Voir d'avantage",20),
]

class Noeud {
    constructor (id, img, name, prix){
    this.id=id;
    this.img=img;
    this.name=name;
    this.prix = prix;
        this.type = "accessoire"
    }  
}

let noeuds = [

    new Noeud (0,"../Assets/Images/accessoires/Accessoires/noeud-papillon-vert-capri-removebg-preview.png","Noeud papillion vert", 5),
    new Noeud (1, "../Assets/Images/accessoires/Accessoires/noeud-papillon-rose-removebg-preview.png", "Noeud papillion rose", 6),
    new Noeud (2, "../Assets/Images/accessoires/Accessoires/noeud-papillon-jaune-removebg-preview.png", "Noeud papillion jaune", 7),
]

class Solaire {
    constructor(id, img, name, prix){
        this.id=id;
        this.img=img;
        this.name=name;
        this.prix = prix;   
        this.type = "accessoire";
    }
}

let solaires = [
    new Solaire (3, "../Assets/Images/accessoires/Accessoires/Solaire1.png", "Lunette de soleil margueritte", 5),
]
   
class Chapeau {
    constructor(id, img, name, prix){
        this.id=id;
        this.img=img;
        this.name=name;
        this.prix = prix;
        this.type = "accessoire";
    }

}

let chapeaux = [
    new Chapeau (4, "../Assets/Images/accessoires/Accessoires/chapeau_de_paille.png", "Chapeau de paille", 5),
]

