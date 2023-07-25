let counter = 0;

class User {
    constructor(name, email, password) {
        this.id = counter++;
        this.name = name;
        this.email = email;
        this.password = password;
    }
};

