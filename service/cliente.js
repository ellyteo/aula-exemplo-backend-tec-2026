import RepositoryCliente from '../repository/cliente.js'
import bcrypt from 'bcrypt'

class ServiceCliente {

    async Buscar() {
        return RepositoryCliente.Buscar()
    }

    async BuscarUm(id) {
        if(!id) {
            throw new Error("Favor informar todos os dados.")
        }

        const cliente = await RepositoryCliente.BuscarUm(id)

        if(!cliente) {
            throw new Error("Cliente não encontrado")
        }

        return cliente
    }

    async Criar(nome, email, senha) {
        if(!nome || !email || !senha) {
            throw new Error("Favor informar todos os dados.")
        }

        const senhaCrypto = await bcrypt.hash(senha, 12)

        const cliente = await RepositoryCliente.Criar(nome, email, senhaCrypto)

        return cliente
    }

    async Alterar(id, nome, email, senha) {
        if(!id || !nome || !email || !senha) {
            throw new Error("Favor informar todos os dados.")
        }

        const senhaCrypto = !senha 
            ? undefined
            : await bcrypt.hash(senha, 12)

        const cliente = await RepositoryCliente.Alterar(id, nome, email, senhaCrypto)

        return cliente
    }

    async Deletar(id) {
        if(!id) {
            throw new Error("Favor informar todos os dados.")
        }

        const cliente = await RepositoryCliente.Deletar(id)

        return cliente
    }

    async Login(email, senha) {
        if(!email || !senha) {
            throw new Error("Favor informar todos os dados.")
        }

        const cliente = await RepositoryCliente.FindByEmail(email)

        
    }

}

export default new ServiceCliente()