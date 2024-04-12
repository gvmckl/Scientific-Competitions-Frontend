import React, { useEffect } from 'react';

import './Home.css';

function Home () {
    
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
      
            document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
            });
          });
        });
      }, []);

      return (
            <div id='home'>
                <div className='home-section'>
                    <div className='home-content'>
                      <div className='home-text'>
                          <h1>Olá, jovem viajante!</h1>
                          <p>Seja muito bem-vindo! Nosso site tem como missão incentivar a participação de jovens de escolas públicas em competições científicas de diversas áreas, incluindo Ciências Naturais, Ciências Sociais, Humanidades, Tecnologia, Matemática, Artes, Educação, Saúde, Ciências Agrárias e Ciências Ambientais.</p>
                          <p>Se você é um jovem determinado e sonhador, não perca essa oportunidade! Confira as competições disponíveis e descubra como elas podem mudar o rumo da sua vida!</p>
                          <a href="#competitions"><button className="home-button">Confira</button></a>
                      </div>
                      <div className='home-img'>
                        <img src="src\assets\gifhome.gif" alt="science gif" width={320} height={320} />
                      </div>
                    </div>
                </div>
            </div>
      );
    }

export default Home

