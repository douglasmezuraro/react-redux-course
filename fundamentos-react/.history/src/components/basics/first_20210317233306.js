import react from 'react'

export default function First() {
    const msg = 'Foo'
    return (
        <div>
            <h2>
                Primeiro componente!
            </h2>
            <p>{msg}</p>
        </div>
    )
}