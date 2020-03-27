import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'

import api from '../../services/api'
import logoImg from '../../assets/logo.svg'

export default function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCidy] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  

  async function handleRegister(e) {
    e.preventDefault()

    const data = {name, email,whatsapp,city,uf}

    const res = await api.post('ongs',data)

    console.log(res.data.id)
    
    try {
      alert(`Seu ID de acesso: ${res.data.id}`)
      history.push('/')
    } catch (err) {
      alert(`Erro no cadastro, tente novamente.`)  
    }
    

  }


  return (          
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>
            Cadastro
          </h1>

          <p>
            Faça seu cadastro, entre na plataforma e ajude 
            pessoas a encontrarem os casos da sua ONG.
          </p>

          <Link className="back-link" to="/">
           <FiArrowLeft size={16} color="#E02041"/>
           Voltar
         </Link>

        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email" placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">

            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCidy(e.target.value)}
            />
            <input
              placeholder="UF"
              //pattern="[A-Z]*" - não passa se for minusculo
              maxLength={2}
              style={{width: 80}}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />

          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>

      </div>
    </div>
  )
}