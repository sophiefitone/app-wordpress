import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header2 from './header2';
import './style.css';

export default function Pages() {

 let APIpages='http://decoinside.altervista.org/wordpress/wp-json/wp/v2/pages'

 const [pages, setPages] = useState([]);

 useEffect(() => {

    axios.get(APIpages)
    .then(res => setPages (res.data));
     return () => {
        console.log('pages')
     }
 })

    return (
          
          pages.map((page) =>
            <>
            <Header2 />
            <h1 key = {page.id} >{page.title.rendered}</h1>

            <div className='bg'></div>
            
            <div className='test'
               dangerouslySetInnerHTML={{ __html: page.content.rendered }}>
            </div>
            
            </>
         )
            
        
)
}
