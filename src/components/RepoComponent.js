import React from 'react'

const RepoComponent = (props) => {
    return (
        <div className='repo'>
            <img src={props.repo.owner.avatar_url} alt='avatar'/>
            <div className='details'>
                <h1>{props.repo.name}</h1>
                <h3>Language: {props.repo.language}</h3>
                <a href={props.repo.html_url} target='_blank'><h3>{props.repo.html_url}</h3></a>
                <div className='description'>
                    <p>{props.repo.description}</p>
                </div>
            </div>
            
        </div>
    )
}

export default RepoComponent
