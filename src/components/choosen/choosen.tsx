import React from 'react'
import Logo from '../../assets/logo.svg'
import Poster from '../../assets/poster.png'

export const Choosen: React.FC = () => {
  return (
    <div className="choosen container">
      <div className="choosen__title">
        <img src={Logo} alt="logo rocketFlix" />
        <h1>Não sabe o que assistir?</h1>
      </div>
      <div className="choosen__content">
        <div className="choosen-information">
          <img className="choosen-information__poster" src={Poster} alt="" />
          <div className="choosen-information__content">
            <h2>Os Caça-Fantasmas</h2>
            <p>
              Em Nova York Peter Venkman, Ray Stantz e Egon Spengler são três
              cientistas do departamento de psicologia da Columbia University,
              que se dedicam ao estudo de casos paranormais. Quando a subvenção
              termina eles são despedidos e Venkman sugere que abram um negócio
              próprio, a exterminadora de fantasmas Ghostbusters. Inicialmente
              eles só têm despesas e nenhum cliente, mas eis que surge Dana
              Barrett, uma violoncelista que teve uma experiência assustadora em
              seu apartamento.
            </p>
          </div>
        </div>
        <button>
          <span className="choosen-button"></span>
          Encontrar filme
        </button>
        <p>
          Clique em Encontrar filme que traremos informações de algum filme para
          você assistir hoje.
        </p>
      </div>
    </div>
  )
}
