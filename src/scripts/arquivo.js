// Função fábrica para criar um usuário
const user = (nome, email, datadenasc, numero) => ({
  nome,
  email,
  datadenasc,
  numero
})

// Obtém dados do localStorage
const getLocalStorage = () => JSON.parse(localStorage.getItem('dbUsuario')) || []

// Salva dados no localStorage
const setLocalStorage = (dbUsuario) => {
  localStorage.setItem('dbUsuario', JSON.stringify(dbUsuario))
}

// Valida campos de entrada
const validateFields = (nome, email, numero) => {
  if (!/^[0-9]+$/.test(numero)) {
    alert('Número de telefone inválido')
    return false
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Email inválido')
    return false
  }

  return nome && email && numero
}

// Registra um novo usuário
const registerUser = () => {
  const nome = document.getElementById('nome').value
  const datadenasc = document.getElementById('datadenasc').value
  const numero = document.getElementById('numero').value
  const email = document.getElementById('email').value

  if (validateFields(nome, email, numero)) {
    const newUser = user(nome, email, datadenasc, numero)
    const dbUsuario = getLocalStorage()
    dbUsuario.push(newUser)
    setLocalStorage(dbUsuario)
    displayUsers()
    alert('Cadastro Realizado!')
    document.getElementById('register-form').reset()
  } else {
    alert('Preencha todos os campos corretamente')
  }
}

// Deleta um usuário
const deleteUser = (nome) => {
  if (confirm('Tem certeza que deseja deletar este usuário?')) {
    console.log('Deletando usuário:', nome)
    let dbUsuario = getLocalStorage()
    dbUsuario = dbUsuario.filter(u => u.nome !== nome)
    setLocalStorage(dbUsuario)
    displayUsers()
  }
}

// Cria um elemento de usuário para exibição
const createUserElement = (user) => {
  const li = document.createElement('li')
  li.innerHTML = `
    <span>${user.nome} - ${user.email}</span>
    <button onclick="deleteUser('${user.nome}')">Deletar</button>
  `
  return li
}

// Exibe a lista de usuários
const displayUsers = (filteredUsers = null) => {
  const dbUsuario = filteredUsers || getLocalStorage()
  const userList = document.getElementById('user-list')
  userList.innerHTML = ''

  dbUsuario.forEach(user => {
    userList.appendChild(createUserElement(user))
  })
}

// Busca usuários
const searchUser = () => {
  const query = document.getElementById('search').value.toLowerCase()

  const dbUsuario = getLocalStorage()
  const filteredUsers = dbUsuario.filter(user => 
    user.nome.toLowerCase().includes(query) || 
    user.email.toLowerCase().includes(query)
  )

  displayUsers(filteredUsers)
}

// Evento para exibir os usuários ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  displayUsers()
})
