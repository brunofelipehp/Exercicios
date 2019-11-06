import axios from 'axios';

const buscaUsuario = async (user)  =>  {

    try {

        const response =  await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);

    } catch (error) {
        
        console.log('Usuario não existe');
    
   }
}
   buscaUsuario('diego3g');


/*

class Github {
     static async  getRepositories(repo) {
       try {

        const response = await axios.get(`https://api.github.com/repos/${repo}`);
        console.log(response.data);

       } catch (error) {
           
        console.log('Repositorio não existes');
       }
  

   
   }
}
   Github.getRepositories('brunofelipehp/Exercicios');
   Github.getRepositories('rocketseat/dslkvmskv');







async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);

    } catch (error) {

        console.log('Usuario não existe');

    }

}
getUserFromGithub('brunofelipehp');
getUserFromGithub('diego3g124123');



// Funão delay aciona o .then após 1s

const delay = () => new Promise(resolve => setTimeout(resolve, 3000));


async function umPorSegundo() {

    await delay()
    console.log('1s')

    await delay()
    console.log('2s')

    await delay()
    console.log('3s')

   }
   umPorSegundo();
  */