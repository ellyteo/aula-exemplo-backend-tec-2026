import { useState } from 'react';
import './style.css'
import { signInUser } from '../../api/user';
import { useNavigate } from 'react-router-dom'

export default function SignInUser() {
    const navigate = useNavigate()
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await signInUser(nome, email, password)
        localStorage.setItem('token', response.token)
        // toast
        return navigate('/signin')
    }

    return (
        <div className="login-container">
            <form className="login-form">
                <h2>SingIn</h2>
                <div className="input-group">
                    <label htmlFor="email">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="button"
                    type="submit"
                    onClick={handleSubmit}
                >Criar</button>
                <button
                    className="button back-button"
                    onClick={() => { }}
                >
                    Voltar
                </button>
            </form>
        </div>
    );
}