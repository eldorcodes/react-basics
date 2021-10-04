import React from 'react'
import User from './User'
import Btn from './Btn'

export default function Property() {
    return (
        <div>
            <h1>Props</h1>
            <User
             name="Eldor"
             age={34}
             isGraduated={false}
             />

             <User 
             name="Alexa"
             age={23}
             isGraduated={true}
              />

              <Btn 
              addItem={() => {
                  console.log('Item was added');
              }}
              text="Add"
              backColor="blue"
              textColor="#fff"
              padding={5}
              margin={5}
               />

               <Btn 
               addItem={() => {
                   console.log('Item was removed');
               }}
               text="Remove"
               backColor="red"
               textColor="#fff"
               padding={5}
               margin={5}
                />
        </div>
    )
}
