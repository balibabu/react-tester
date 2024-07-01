import React from 'react'
import { Link } from 'react-router-dom'

export default function Home({ routes }) {
    return (
        <div className='m-2 d-flex flex-wrap bg-primary'>
            {routes.map((route) => <div className='py-1 px-3 rounded-3 bg-secondary mb-2 mx-2' key={route}><Link to={'/' + route} style={{ textDecoration: 'none', color: 'black', fontSize: '18px', fontWeight: 'bold' }}>{route}</Link></div>)}
        </div>
    )
}
