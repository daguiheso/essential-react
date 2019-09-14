import React from 'react'

const HelloWorld = () => {
  const Hello = '!Hello World¡'
  const isTrue = true
  return (
    <div className="title">
      <h1>{Hello}</h1>
      <h2>Curso esencial de React</h2>
      <img src="https://cdn.auth0.com/blog/react-js/react.png" />
      {isTrue ? <h4>Esto es verdadero</h4> : <h5>Soy falso</h5>}
      {isTrue && <h4>Soy verdadero</h4>}
    </div>
  )
}

export default HelloWorld