import React from 'react';

import {FaUser, FaLock} from 'react-icons/fa';

import { useState } from 'react';

import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassoword] = useState("")

    const handleSubmit = () =>{
        console.log(username,password)
        console.log("Envio"); 
    }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>SAU PUC-RIO</h1>
        <h2>SISTEMA ACADÊMICO UNIVERSITARIO</h2>
        <div>
            <FaUser className ="iconuser" />
            <input className='input-field' type='text' placeholder='Número de Matrícula'
            onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <div>
            <input  className='input-field' type='password' placeholder='Senha'
            onChange={(e) => setPassoword(e.target.value)}></input>
            <FaLock className ="iconsenha" />
        </div>

        <div className='recall-forget'>
            <label> 
                <input type = 'checkbox' />
                Lembrar de mim
            </label>
            <label>
                <a href="#">Esqueci minha senha</a>
            </label>
        </div>

        <button>Entrar</button>

        <div className='signup-link'>
            <label>
            <a href="#">Criar minha primeira senha</a> 
            </label>
        </div>
        </form>
    </div>
  )
}

export default Login
