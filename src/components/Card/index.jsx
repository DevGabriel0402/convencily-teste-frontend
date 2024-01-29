import { Container } from "./styles"
import IconMovie from '../../assets/local_movies.svg'
import IconAcademy from '../../assets/Academy-award.svg'




const Card = ({ movieData }) => {
    return (
        <Container>
            <div className="thumb">
                <img src={IconMovie} alt="movie-logo" />
            </div>
            <div className="description">
                <div>
                    <h3 className="title">{movieData.name}</h3>
                    <p className="runtime">{movieData.runtimeInMinutes} min</p>
                </div>

                <div className="award">
                    <img src={IconAcademy} alt="icon Academy Award" />
                    <p> {movieData.academyAwardWins} Wins & {movieData.academyAwardNominations} Nominations</p>
                </div>
                <div className="brmilion">
                    <div>
                        <h4 className="subtitle">Budget</h4>
                        <p className="value">${movieData.budgetInMillions}M</p>
                    </div>
                    <div>
                        <h4 className="subtitle">Revenue</h4>
                        <p className="value">${movieData.boxOfficeRevenueInMillions}M</p>
                    </div>
                </div>
            </div>

        </Container >
    )
}

export default Card