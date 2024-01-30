import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Container, ContainerCard, Footer } from './styles'
import Header from '../../components/Header/index'
import Card from '../../components/Card/index'





function Home() {

  const [movies, setMovies] = useState("")
  const [filteredMovies, setFilteredMovies] = useState()

  const thumbnail = [
    {
      imageUrl: "https://theapishawkeye.files.wordpress.com/2021/03/lotr.jpg?w=800",
      imageAlt: "Thumbnail Lords of Rings"
    },
    {
      imageUrl: "https://img5.tokyvideo.com/videos/625/62597/thumbs/thumbs_0005_custom_1618501123.1428.jpg",
      imageAlt: "Thumbnail Hobbit Series"
    },
    {
      imageUrl: "https://www.desktopbackground.org/download/1920x1080/2014/11/23/860250_the-hobbit-movie-hd-wallpapers-hd-wallpaper-backgrounds-of-your_1920x1200_h.jpg",
      imageAlt: "Thumbnail Unexpected Journey"
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVTvSqzG_iU41z8p1ig2YNz_Az-Z4l8StqeL2eiSSP1Wa2gK6avZl4vdrUpZDo7zFe8jQ&usqp=CAU",
      imageAlt: "Thumbnail Desolation of Smaug"

    },
    {
      imageUrl: "https://www.wallpaperup.com/uploads/wallpapers/2014/09/15/443110/265169500277b70e68b76fb744f27229.jpg",
      imageAlt: "Thumbnail Battle of the five Armies"

    },
    {
      imageUrl: "https://i.ytimg.com/vi/un72Qir4FX4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLALTjVlwzJmpjRxWqjk1N6aYz1dCQ",
      imageAlt: "Thumbnail Two Towers"

    },
    {
      imageUrl: "https://lh3.googleusercontent.com/proxy/cKZHDpdnMyB4bZeEVIjBWHPITuVmmf-OSzpoChhPNlUIq4FpVaXySAsoQ2kPUs1uD3-R2yNG60-n_MCXDXbh5YoLpk3v2LB2LeKzwrBBgfjUO9cbroCZURjYUaYBh99N4E20hAQ6xqBSLs8yjJ8y7l31Pizs-zRdm0kBK_nyEkZbLTPIib9A_QpfOrt3YUy9Br2QPLKLIni1GCVoPBH2cJGj",
      imageAlt: "Thumbnail Tellowship of the Ring"

    },
    {
      imageUrl: "https://vistapointe.net/images/the-lord-of-the-rings-the-return-of-the-king-1.jpg",
      imageAlt: "Thumbnail Return of the King"

    },

  ]


  // Aqui pegamos os dados da nosso api
  useEffect(() => {

    async function loadData() {
      const {
        data: { docs }
      } = await api.get('movie')

      // Aqui  guardamos as informações dos movies
      setMovies(docs)
      setFilteredMovies(docs)
      console.log(docs)
    }

    loadData()


  }, [])





  return (
    <Container>
      <Header movies={movies} setFilteredMovies={setFilteredMovies} />

      <ContainerCard className='container-card'>
        {filteredMovies && filteredMovies.map((movie, index) => (
          <Card movieData={movie} thumbnail={thumbnail[index]} key={movie._id} />
        )
        )}
      </ContainerCard>


      <Footer>Teste feito por <a href="https://www.instagram.com/eu.gabrielvieira/" target='_blank'>@Gabriel 🤞</a></Footer>
    </Container>
  )
}

export default Home
