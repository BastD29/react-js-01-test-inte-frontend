import React from 'react';
import logo from '../../src/assets/VP_logotype_wh.svg'

export default function Header() {
  return (
    <header>
        <img src={logo} alt="img-background" />
        <h1>Quel sera votre prochain voyage ?</h1>
    </header>
  )
}
