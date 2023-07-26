let counter = 0;

class User {
    constructor(name, email, password,telephone,adresse) {
        this.id = counter++;
        this.name = name;
        this.email = email;
        this.password = password;
        this.telephone = telephone;
        this.adresse = adresse;
    }
};

