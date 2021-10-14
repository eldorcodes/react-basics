import React, { useState } from 'react'
import { Button, Form, 
    FormControl, FormGroup, 
    FormLabel, Card, Container, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { database } from './config'
import { set, ref } from 'firebase/database'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
   

export const ApplyForm = () => {
    const router = useHistory()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone,setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const fetchValues = (e) => {
        e.preventDefault()
        console.log({ name, email, phone, password });

        if (password !== confirmPassword) {
            setError('Passwords do NOT match!')
        }

        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log(user)
            set(ref(database,`users/`), {
                username: name,
                email:email,
                phone:phone,
                password:password
            })
            router.push('/options')
        }).catch((err) => console.log(err))
    }

    return (
        <Container>
        <Card style={{
            padding:10,
            marginTop:20
        }}>
            <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Card.Title style={{
                    textAlign:'center'
                }}>Application</Card.Title>
                <Form 
                onSubmit={fetchValues}>
            <FormGroup className="mb-3">
                <FormLabel>Name</FormLabel>
                <FormControl 
                onChange={e => setName(e.target.value)}
                type="text" 
                placeholder="Type your name"
                />
            </FormGroup>
            <FormGroup className="mb-3">
                <FormLabel>Email</FormLabel>
                <FormControl
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Type email address"
                 />
            </FormGroup>
            <FormGroup className="mb-3">
                <FormLabel>Phone</FormLabel>
                <FormControl 
                onChange={e => setPhone(e.target.value)}
                type="text"
                placeholder="123 456 7890"
                 />
            </FormGroup>
            <FormGroup className="mb-3">
                <FormLabel>Password</FormLabel>
                <FormControl 
                onChange={e => setPassword(e.target.value)}
                type="text"
                placeholder="Create a password"
                 />
            </FormGroup>
            <FormGroup className="mb-3">
                <FormLabel>Confirm password</FormLabel>
                <FormControl 
                onChange={e => setConfirmPassword(e.target.value)}
                type="text"
                placeholder="Confirm password"
                 />
            </FormGroup>
            <FormGroup 
            className="mb-3"
            style={{
                textAlign:'center'
            }}>

                <Button type="submit"
                 size="lg">Submit</Button>
        
            </FormGroup>
        </Form>
            </Card.Body>
        </Card>
        </Container>
    )
}
