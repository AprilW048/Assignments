import React from 'react'

function Person({person, index}) {
    return (
        <div>
            <h2>KEY:{index} I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>
        </div>
    )
}

export default Person
