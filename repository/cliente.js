import cliente from "../model/cliente"

class RepositoryCliente {

    async Buscar() {

    }

    async FindByEmail(email) {
        return cliente.findOne({ where: { email } })
    }

    async BuscarUm(id) {

    }

    async Criar(nome, email, senha) {

    }

    async Alterar(id, nome, email, senha) {

    }

    async Deletar(id) {

    }

}

export default new RepositoryCliente()