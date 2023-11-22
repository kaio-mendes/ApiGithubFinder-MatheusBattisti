type SearchProps = {
    loadUser:(userName:string) => Promise<void>;
};

import { useState, KeyboardEvent } from 'react';
import {BsSearch} from 'react-icons/bs'
import styles from './Search.module.css'
const Search = ({loadUser}:SearchProps) => {

    const [userName, setUserName] = useState("");
    const handleKeyDown = (e:KeyboardEvent) => { //Código para permitir utilizar a tecla enter para enviar informações (obs: e é a abreviação para a event, função js)
        if(e.key ==="Enter") {
           loadUser(userName)     
        }
    };

  return (
    <div className={styles.search}>
        <h2>Busque um usuário: </h2>
        <p>Conheça seus melhores repositórios</p>
        <div className={styles.search_container}>
            <input type='text' placeholder='Digite o nome do usuário' onChange={(e)=>setUserName(e.target.value)} onKeyDown={handleKeyDown}></input>
            <button onClick={()=>loadUser(userName)}><BsSearch/></button>
        </div>

    </div>
  )
}

export default Search