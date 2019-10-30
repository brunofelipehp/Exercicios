"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Exercicio 5.2
var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuario, {
  nome: 'Gabriel'
});

var usuario3 = _objectSpread({}, usuario, {
  endereco: {
    cidade: 'Lontras'
  }
});

console.log(usuario2);
console.log(usuario3);
/*

// Exercicio 5.1

function soma(...params) {
    
   return params.reduce((index, proximo) => index + proximo);
   
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2)); 

/*
const arr = [1, 2, 3, 4, 5, 6, 7];

const [x, ...y] = arr;

console.log(x);
console.log(y);



/*
// Exercicio 4.2
function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos.`;
   }
 console.log(mostraInfo({ nome: 'Diego', idade: 23 }))




// exercicio 4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
   };

 const {nome, endereco: {cidade, estado}} = empresa;

 console.log(nome);
 console.log(cidade);
 console.log(estado);

// Exercicio 3.4

const promise = () => {
    return new Promise((resolve, reject) =>{
        return resolve();
    });
};

console.log(promise());

// Exercicio 3.3

const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = 'Diego', idade = 18) => {
    return {nome, idade}
}

console.log(mostraUsuario())

// Exercicio 3.2

const usuario = { nome: 'Diego', idade: 23 };

const mostraUsuario  = () => usuario.idade;

console.log(mostraUsuario());

// Execicio 3.1
const arr = [1, 2, 3, 4, 5];

 const resultado = arr.map(item => item + 10);

// Exercicio 2.4

const user = usuarios.map(function (item) {
    item.idade *= 2
    return item
});

const result = user.filter(function (item) {
    return item.idade <= 50
});

console.log(result);

// Exercicio 2.3

const empresa = usuarios.find(function (item) {
    return item.empresa == 'Google'
});

console.log(empresa);

// Exercicio  2.2
const usuario = usuarios.filter(function (item) {
    return item.empresa == 'Rocketseat' && item.idade > 18;
});

console.log(usuario);

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

// Exercicio 01

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

*/
