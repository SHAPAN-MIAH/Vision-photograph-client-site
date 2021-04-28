import React, { useEffect, useState } from 'react';
import MoreTeamDtl from '../MoreTeamDtl/MoreTeamDtl';
import './MoreTeam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const MoreTeam = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch('https://fast-garden-51323.herokuapp.com/teams')
        .then(res => res.json())
        .then(data => setTeams(data))
    }, [])

    return (
        <section className="teamSection container">
            
                    <div className="text-center">
                        <h3 className="team-heading justify-content-center"> <span>MEET</span> OUR TEAM</h3>
                        <p className="tm-hdContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint aliquam quidem, asperiores repellendus vero vitae.</p>
                    </div>
                <div className="row">
                    {
                     teams.map(teamData => <MoreTeamDtl key={teamData.key} teamData={teamData}></MoreTeamDtl> )
                    }
                </div>  
                <div className="text-center m-3">
                 <Link to="/">
                    <button className="showMoreBtn">Back To Home<FontAwesomeIcon  icon={faArrowRight}></FontAwesomeIcon></button>
                 </Link>
                </div> 
        </section>
    );
};

export default MoreTeam;