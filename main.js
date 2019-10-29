class Usuario {

    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {

        if (this.admin) {
            return `O usuario ${this.email} é um administrador`

        } else {
            return `O usuario ${this.email} não é um administrador`;

        }

    }

}


class Admin extends Usuario {

    constructor(email, senha) {
        super(email, senha);
        super.admin = true;

    }

}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

// Exeerciocio 2.1
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(function (item) {
    return item.idade;
});

console.log(idades);

// Exercicio  2.2
const usuario = usuarios.filter(function (item) {
    return item.empresa == 'Rocketseat' && item.idade > 18;
});

console.log(usuario);

// Exercicio 2.3

const empresa = usuarios.find(function (item) {
    return item.empresa == 'Google'
});

console.log(empresa);


// Exercicio 2.4

const user = usuarios.map(function (item) {
    item.idade *= 2
    return item
});

const result = user.filter(function (item) {
    return item.idade <= 50
});

console.log(result);
