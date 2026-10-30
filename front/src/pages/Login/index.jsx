import { useState } from 'react';
import './style.css'
import { loginUser } from '../../api/user';
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await loginUser(email, password)
        localStorage.setItem('token', response.token)
        // toast
        return navigate('/users')
    }
    
    const handleSignIn = () => {
            localStorage.getItem('token')
            return navigate('/signin')
        }
    
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
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
                <p>Não possui conta? <spam className="signup" onClick={handleSignIn}>Cadastre-se</spam></p>
                <button
                    className="button"
                    type="submit"
                    onClick={handleSubmit}
                    >Entrar</button>
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