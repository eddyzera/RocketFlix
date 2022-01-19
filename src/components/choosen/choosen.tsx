import React from 'react'
import Logo from '../../assets/logo.svg'
import Poster from '../../assets/poster.png'
import { MovieProps } from './types'

export const Choosen: React.FC<MovieProps> = ({
  movie,
  isLoading
}: MovieProps) => {
  return (
    <div className="choosen container">
      <div className="choosen__title">
        <img src={Logo} alt="logo rocketFlix" />
        <h1>Não sabe o que assistir?</h1>
      </div>
      <div className="choosen__content">
        {isLoading && (
          <>
            <div className="choosen-information">
              <img
                className="choosen-information__poster"
                src={movie.poster}
                alt=""
              />
              <div className="choosen-information__content">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
              </div>
            </div>
          </>
        )}
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
  )
}
