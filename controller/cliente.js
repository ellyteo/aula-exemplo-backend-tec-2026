import ServiceCliente from '../service/cliente.js'

class ControllerCliente {

    async Buscar(req, res) {
        try {
            const clientes = await ServiceCliente.Buscar()
            
            res.status(200).send({ clientes })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async BuscarUm(req, res) {
        try {
            const id = req.params.id
            const cliente = await ServiceCliente.BuscarUm(id)
            
            res.status(200).send({ cliente })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Criar(req, res) {
        try {
            const { nome, email, senha } = req.body
            await ServiceCliente.Criar(nome, email, senha)
            
            res.status(200).send({ message: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.params.id
            const { nome, email, senha } = req.body
            await ServiceCliente.Alterar(id, nome, email, senha)
            
            res.status(200).send({ message: "Alterado com sucesso"  })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.params.id
            await ServiceCliente.Deletar(id)
            
            res.status(200).send({ message: "Deletado com sucesso"  })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async Login(req, res) {
        try {
            const { email, senha } = req.body
            const token = await ServiceCliente.Login(email, senha)
            
            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

}

export default new ControllerCliente()