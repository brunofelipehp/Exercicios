class Usuario{
    
    constructor(email, senha){
       this.email = email;
       this.senha = senha;
    }

    isAdmin(){

        if (this.admin) {
            return `O usuario ${this.email} é um administrador`
        
        }else{
            return `O usuario ${this.email} não é um administrador`;
        
        }
    
    }

}


class Admin extends Usuario{

    constructor(email, senha){
        super(email, senha);
        super.admin = true;

    }

}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true