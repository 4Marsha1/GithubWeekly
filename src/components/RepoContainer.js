import React, {useState, useEffect} from 'react'
import RepoComponent from './RepoComponent'

const RepoContainer = () => {

    const [Repo,setRepo] = useState([])
    const [Search,setSearch] = useState('')
    const [q,setQ] = useState('')

    const getRepo = async() =>{
        const response = await fetch (`https://api.github.com/search/repositories?q=stars:%3E10000+language:${q}`)
        const data = await response.json();
        setRepo(data.items)
    }

    useEffect(() => {
        getRepo();
    },[q])

    const handleChange = e =>{
        setSearch(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault()
        setQ(Search)
        setSearch('')
    }

    const R = Repo.map(repo =>{
        return <RepoComponent key={repo.id} repo={repo}/>
    })
    return (
        <div className='container'>
            <form className='myForm' onSubmit={handleSubmit}>
                <input type='text' placeholder='Filter' value={Search} onChange={handleChange}/>
                <button>Filter</button>
            </form>
            <div className='repos'>
                {R}
            </div>
        </div>
       
    )
}

export default RepoContainer
