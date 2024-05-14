import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

function Admin() {

  function initState(){
    return {user:'', password: ''};
  }

  const [values, setValues] = useState(initState);
  const navigate = useNavigate();

  function onChange(event){
    const {value, name} = event.target;
    setValues({
      ...values,
      [name]:value,
    });
  }
  function logar(){
    const user = 'Factor013';
    const password =  '1234';
    if(values.user === user && values.password === password){
      navigate('/Cadastro');
    }else{
      alert('Usuário ou Senha incorretos. \nPor Favor tente novamente!');
    }
  }

  return ( 
    <div className="form-login">
      <div className="Logo">
        <img src="" />
      </div>
      <form className="form" onSubmit={logar}>
        <input placeholder="Login" name="user" type="text" onChange={onChange} value={values.user}/>
        <input placeholder="Senha" name="password" type="password" onChange={onChange} value={values.password}/>
        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
    </div>
  );
}

export default Admin;
