import { Fragment, useEffect, useRef, useState } from 'react'
import Logo from '../../assets/convincely.png'
import { TopHeader, Container } from './styles'


export const Header = ({ movies, setFilteredMovies }) => {

    const [aveValues, setAveValues] = useState({
        runtime: 0,
        budget: 0
    })


    const input = useRef()

    function aveMovies(movies) {
        const runtime = movies.reduce((acc, cur) => cur.runtimeInMinutes + acc, 0) / movies.length
        const budget = movies.reduce((acc, cur) => cur.budgetInMillions + acc, 0) / movies.length



        setAveValues({
            runtime,
            budget
        })



    }

    useEffect(() => {
        if (movies && movies.length > 0) {
            aveMovies(movies)

        }
    }, [])

    function inputChange() {

        const newMovies = movies.filter(movie => movie.name.toLowerCase().includes(input.current.value.toLowerCase()))

        aveMovies(newMovies)
        setFilteredMovies(newMovies)
    }

    return (
        <Fragment>
            <TopHeader>
                <img src={Logo} alt="conv Icon" />
                <p>Senior Frontend Test</p>
            </TopHeader>
            <Container>
                <h1>Lord of the Rings Movies</h1>
                <div className='ave-values'>
                    <div>
                        <p>Ave. movie runtime: {aveValues.runtime} min</p>
                        <p>Ave. movie budget: ${aveValues.budget}M</p>
                    </div>
                    <div className='input-values'>
                        <input type="text" placeholder='Filter movies by name' ref={input} onChange={inputChange} />
                    </div>
                </div>

            </Container>

        </Fragment >

    )
}

export default Header