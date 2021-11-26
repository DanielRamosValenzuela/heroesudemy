import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({ history }) => {

 

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroesById( heroeId ), [ heroeId ] )

    if ( !hero ) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {

        if( history.length <= 2){
            history.push('/login');
        } else {
            history.goBack('/');
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`../assets/heroes/${ heroeId }.jpg`}
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInBottomLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Altero ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appereance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> {characters} </p>

                <button className="btn btn-primary" onClick={ handleReturn }>
                    Return
                </button>
                

            </div>
        </div>
    )
}
