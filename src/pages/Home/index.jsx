import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Container, ContainerCard } from './styles'
import Header from '../../components/Header/index'
import Card from '../../components/Card/index'





function Home() {

  const [movies, setMovies] = useState("")
  const [filteredMovies, setFilteredMovies] = useState()


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
        {filteredMovies && filteredMovies.map(movie => (
          <Card movieData={movie} key={movie._id} />
        )
        )}
      </ContainerCard>



    </Container>
  )
}

export default Home
