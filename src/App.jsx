import { useState } from 'react'
import './App.css'

function UserCard(props) {
   const user = props.user

    return (
        <>
        <div className={user.isAdmin ? "user-card admin-card" : "user-card" }>
            {user.name} {user.isAdmin ? "(Admin)" : ""},
            {user.email},
            {user.age}
        </div>
        </>
    )
}

function App() {
    const users = [
        {id: 1, name: "Tim", email: "tim.tim@tim.se", age: 10, isAdmin: true},
        {id: 2, name: "Dim", email: "Dim.Dim@Dim.co", age: 44, isAdmin: false},
        {id: 3, name: "Lim", email: "Lim.Lim@Lim.ru", age: 22, isAdmin: false},
        {id: 4, name: "Pim", email: "Pim.Pim@Pim.jp", age: 33, isAdmin: false}
    ]

    return (
        <>
        {users.map( u => <UserCard key={u.id} user={u} />) }
        </>
    )
}

export default App
