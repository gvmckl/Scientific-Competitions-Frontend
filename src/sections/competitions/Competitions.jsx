import React, { useRef, useState } from 'react';
import './Competitions.css';

function Competitions() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCompetitions, setSelectedCompetitions] = useState([]);
  const sliderRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollOffset;
    }
  };
 
  const openModal = (competitions) => {
    setSelectedCompetitions(competitions);
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };

  const closeModalOutside = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div id='competitions'>
      <div className='competitions-section'>
        <div className='page-container'>
          <div className='competitions-content'>
            <div className='competitions-text'>
              <h1>Área das Competições</h1>
              <p>Aqui, você encontrará todas as competições cadastradas no site, separadas por cada área correspondente. Cada área é um mundo diferente, então não precisa se limitar e sinta-se à vontade para explorar cada um deles.</p>
              <h2>Confira a lista das competições disponíveis:</h2>
            </div>
            <div className="competitions-container" ref={sliderRef}>
              <div className="competitions-slider">
                <div className='competition-box'>
                  <h1>Ciências Naturais</h1>
                  <p>Essa sessão inclui áreas como biologia, química, física, astronomia, geologia e ciências ambientais.</p>
                  <button className="competitions-button" onClick={() => openModal([
                    { title: "Competição 1", specialty: "Biologia", description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint adipisci animi laboriosam doloribus cupiditate rerum dicta quia nulla reiciendis id amet ullam, voluptatibus ipsa soluta ea explicabo corrupti modi quo!", type: "Online", prize: "$1000", url: "https://example.com" },
                  ])}>Explorar</button>
                </div>
                <div className='competition-box'>
                  <h1>Ciências Sociais</h1>
                  <p>Essa sessão inclui áreas como sociologia, psicologia, antropologia, economia, ciência política e geografia humana.</p>
                  <button className="competitions-button" onClick={() => openModal([
                    { title: "Competição 1", specialty: "Portugues", description: "Descrição da competição 1", type: "Online", prize: "$1000", url: "https://example.com" },
                  ])}>Explorar</button>
                </div>
                <div className='competition-box'>
                  <h1>Humanidades</h1>
                  <p>Essa sessão inclui áreas como história, filosofia, literatura, línguas e lingística.</p>
                  <button className="competitions-button" onClick={() => openModal([])}>Explorar</button>
                </div>
                <div className='competition-box'>
                  <h1>Tecnologia</h1>
                  <p>Essa sessão inclui áreas como engenharia, tecnologia da informação, ciência da computação e sistemas de informação.</p>
                  <button className="competitions-button" onClick={() => openModal([])}>Explorar</button>
                </div>
                <div className='competition-box'>
                  <h1>Matemática</h1>
                  <p>Essa sessão inclui áreas como álgebra, raciocínio lógico, geometria, estatística e teoria dos números.</p>
                  <button className="competitions-button" onClick={() => openModal([])}>Explorar</button>
                </div>
                <div className='competition-box'>
                  <h1>Artes</h1>
                  <p>Essa sessão inclui áreas como artes visuais, música, dança, literatura criativa, teatro, cinema e audiovisual.</p>
                  <button className="competitions-button" onClick={() => openModal([])}>Explorar</button>
                </div>
                <div className='competition-box'>
                  <h1>Saúde</h1>
                  <p>Essa sessão inclui áreas como medicina, enfermagem, odontologia, nutrição e saúde pública.</p>
                  <button className="competitions-button" onClick={() => openModal([])}>Explorar</button>
                </div>
                <div className='competition-box'>
                  <h1>Ciências Agrárias</h1>
                  <p>Essa sessão inclui áreas como agronomia, ciência do solo, zootecnia, engenharia agrícola, agroecologia e agroindústria.</p>
                  <button className="competitions-button" onClick={() => openModal([])}>Explorar</button>
                </div>
                <div className='competition-box'>
                  <h1>Comunicação</h1>
                  <p>Essa sessão inclui áreas como jornalismo, publicidade, relações públicas, comunicação digital, comunicação visual e comunicação organizacional.</p>
                  <button className="competitions-button" onClick={() => openModal([])}>Explorar</button>
                </div>
                <div className='competition-box'>
                  <h1>Ciências da Terra</h1>
                  <p>Essa sessão inclui áreas como meteorologia, oceanografia, climatologia, geofísica e hidrologia.</p>
                  <button className="competitions-button" onClick={() => openModal([])}>Explorar</button>
                </div>
                <div className='competition-box'>
                  <h1>Empreendedorismo</h1>
                  <p>Essa sessão inclui áreas administração, investimentos, marketing tecnologia, design e inovação.</p>
                  <button className="competitions-button" onClick={() => openModal([])}>Explorar</button>
                </div>
              </div>
            </div>
            <div className="arrows-container">
              <button className="arrow left-arrow" onClick={() => scroll(-260)}>&#10094;</button>
              <button className="arrow right-arrow" onClick={() => scroll(260)}>&#10095;</button>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="modal" onClick={closeModalOutside}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              {selectedCompetitions.length > 0 && (
                <>
                  <h2>{selectedCompetitions[0].area}</h2>
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>Título</th>
                          <th>Especialidade</th>
                          <th>Descrição</th>
                          <th>Tipo</th>
                          <th>Prêmio</th>
                          <th>Site</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedCompetitions.map(competition => (
                          <tr key={competition.title}>
                            <td>{competition.title}</td>
                            <td>{competition.specialty}</td>
                            <td>{competition.description}</td>
                            <td>{competition.type}</td>
                            <td>{competition.prize}</td>
                            <td><button className="competition-link" onClick={() => window.open(competition.url, "_blank")} >Link</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
            </div>
      </div>
  );
}

export default Competitions;
