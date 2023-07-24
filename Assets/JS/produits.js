class Chevre {
    constructor(id,img,name,showmore, prix, description) {
        this.id = id;
        this.img=img;
        this.name=name;
        this.prix = prix;
        this.description = description;
        this.showmore=showmore;
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
    new Chevre (9,"../Assets/Images/chevres/Images_Chevres/Chèvre n°10.jpeg","Lucas","Voir d'avantage",20),
    new Chevre (10,"../Assets/Images/chevres/Images_Chevres/Chèvre n°11.jpeg","Gaëlle","Voir d'avantage",40),
    new Chevre (11,"../Assets/Images/chevres/Images_Chevres/Chèvre n°12.jpg","Adrien","Voir d'avantage",20),
]

class Noeud {
    constructor (id, img, name){
    this.id=id;
    this.img=img;
    this.name=name;
    }  
}

let noeuds = [

    new Noeud (0,"../Assets/Images/accessoires/Accessoires/noeud-papillon-vert-capri-removebg-preview.png","Noeud papillion vert"),
    new Noeud (1, "../Assets/Images/accessoires/Accessoires/noeud-papillon-rose-removebg-preview.png", "Noeud papillion rose"),
    new Noeud (2, "../Assets/Images/accessoires/Accessoires/noeud-papillon-jaune-removebg-preview.png", "Noeud papillion jaune"),
]

class Solaire {
    constructor(id, img, name){
        this.id=id;
        this.img=img;
        this.name=name;   
    }
}

let solaires = [
    new Solaire (3, "../Assets/Images/accessoires/Accessoires/Solaire1.png", "Lunette de soleil margueritte"),
]
   
class Chapeau {
    constructor(id, img, name){
        this.id=id;
        this.img=img;
        this.name=name;
    }

}

let chapeaux = [
    new Chapeau (4, "../Assets/Images/accessoires/Accessoires/chapeau_de_paille.png", "Chapeau de paille"),
]

