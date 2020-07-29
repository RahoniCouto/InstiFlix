import React from 'react';
import Menu from '../../Componentes/Menu';
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../Componentes/BannerMain';
import Carousel from '../../Componentes/Carousel';
import Footer from '../../Componentes/Footer';



function App() {
  return (
    <div className="backg">
      <header>
        <Menu />
        
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videosDescription={"O que é front-end?"}
        />
      </header>

      <main>
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        />
          
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[1]}
        />

        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[2]}
        />

        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[3]}
        />

        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[4]}
        />
        <Carousel 
          ignoreFirstVideo
          category={dadosIniciais.categorias[5]}
        />
        
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  );
}

export default App;
