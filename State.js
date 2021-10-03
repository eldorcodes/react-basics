import React, { Component } from 'react'

export default class Manage extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: '1',
            name: 'Eldor',
            isGraduated: false,
            hobbies: ['football','music'],
            car: {
                name: 'Tesla',
                color: 'blue',
                year: 2018
            }
        }
    }
    render() {
        return (
            <div>
                <h1>State in Class Component</h1>
                <p>{this.state.id}</p>
                <p>{this.state.name}</p>
                <p>{this.state.isGraduated ? 'He is already graduated':'He is NOT graduated'}</p>
                {this.state.hobbies.map((hobby) => (
                    <p>{hobby}</p>
                ))}
                <p>{this.state.car.name} {this.state.car.color} {this.state.car.year}</p>
                <button onClick={() => {
                    this.setState((prev) => (
                        {
                            id: '2',
                            name: 'Alexa',
                            isGraduated: true,
                            hobbies: [...prev.hobbies,'new hobby'],
                            car: {
                                name: 'BMW',
                                color: 'white',
                                year: 2021
                            }
                        }
                    ))
                }}>Change State</button>
            </div>
        )
    }
}
