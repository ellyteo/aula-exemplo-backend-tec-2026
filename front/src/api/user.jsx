import api from './api'

//buscar

export const buscarUser = async () => {
    const response = await api.get('/v1/user/buscar')

    return response.data
}

//buscar um

export const detalheUser = async (id) => {
    const response = await api.get(`/v1/user/detalhe/${id}`)

    return response.data
}

//criar

export const signInUser = async (nome, email, password) => {
    const body = { nome, email, password }
    const response = await api.post('/v1/user/signin', body, {
        headers: { 'Content-Type': 'application/json' }
    })

    return response.data
}

//alterar

export const alterarUser = async (id, nome, email, password) => {
    const body = { nome, email, password }
    const response = await api.put(`/v1/user/alterar/${id}`, body, {
        headers: { 'Content-Type': 'application/json' }
    })

    return response.data
}

//deletar

export const deletarUser = async (id) => {
    const response = await api.post(`/v1/user/deletar/${id}`, body, {
        headers: { 'Content-Type': 'application/json' }
    })

    return response.data
}

export const loginUser = async (email, password) => {
    const body = { email, password }
    const response = await api.post('/v1/user/login', body, {
        headers: { 'Content-Type': 'application/json' }
    })

    return response.data
}
