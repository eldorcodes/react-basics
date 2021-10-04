import React, {useState} from 'react'

export default function State() {
    const [name,setName] = useState('Eldor')
    const [number, setNumber] = useState(0)
    const [user, setUser] = useState({
        id: '1',
        name: 'Medina',
        age: 23,
        isGraduated: false
    })

    const [users, setUsers] = useState([
        {
            id: '0',
            name: 'ALexa',
            isGraduated: false,
            age: 21
        },
        {
            id: '1',
            name: 'Eldor',
            isGraduated: false,
            age: 34
        },
        {
            id: '2',
            name: 'Media',
            isGraduated: true,
            age: 23
        }
    ])

    const deleteOne = (id) => {
        setUsers(
            users.filter((user) => user.id !== id)
        )
    }

    return (
        <div>
            <h1>State in Functional Component</h1>
            {/* <p>{name}</p>
            <button onClick={
                () => setName('Alexa')
            } >Change Name</button>

            <p>{number}</p>
            <button onClick={
                () => setNumber(100)
            }>Change number</button>

            <p>{user.id} {user.name} {user.age}</p>
            <p>{user.isGraduated ? 'She is already graduated' : 'She is NOT graduated'}</p>
            <button onClick={
                () => {
                    setUser({
                        id: '2',
                        name: 'Eldor Togaymurotov',
                        age: 34,
                        isGraduated: true
                    })
                }
            }>Change user</button> */}

            {
                users.map((user) => (
                    <div 
                    style={
                        user.isGraduated ? {backgroundColor:'blue'}:{backgroundColor:'purple'}
                    }>
                        <h1>{user.name}</h1>
                        <p>{user.age}</p>
                        <p>{user.isGraduated ? 'He is already graduated':'he is NOT graduated'}</p>
                        <button onClick={
                            () => deleteOne(user.id)
                        }>Delete</button>
                    </div>
                ))
            }

        </div>
    )
}
