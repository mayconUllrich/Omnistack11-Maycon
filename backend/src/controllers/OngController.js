const crypto = require('crypto') // pacote crypto, usado para gerar o ID
const connection = require('../database/connection')// arquivo de conexão com o banco de dados

module.exports = {

  async index (req,res) {
    const ongs = await connection('ongs').select('*')
    return res.json(ongs)
  },

  async create (req,res) {

    const data = req.body // para pegar o corpo da requisição
    const { name, email, whatsapp, city, uf} = data // desestruturação
    
    // criar o ID usando o Pacote crypto criando uma string aleatoria
    const id = crypto.randomBytes(4).toString('HEX')
  
    //conexao com banco de dados
    await connection('ongs').insert({
      id,
      name, 
      email, 
      whatsapp, 
      city, 
      uf,
    })
  
    return res.json({ id })
  }
}