'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (email === 'admin@strawberry.com' && password === '123456') {
      document.cookie = `token=fake_admin_token; path=/`
      router.push('/dashboard')
    } else {
      setError('Credenciais inválidas. Tente novamente.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-96 flex flex-col gap-4"
      >
        <h1 className="text-2xl font-semibold text-center text-pink-600">🍓 Strawberry Admin</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border p-2 rounded focus:outline-pink-400"
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border p-2 rounded focus:outline-pink-400"
        />

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded font-medium transition"
        >
          Entrar
        </button>

        <p className="text-gray-500 text-xs text-center">
          Use <strong>admin@strawberry.com</strong> / <strong>123456</strong>
        </p>
      </form>
    </div>
  )
}
