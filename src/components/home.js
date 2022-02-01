import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './header'

export default function Home() {

    let APIposts ='http://localhost/wordpress/wp-json/wp/v2/posts'

    const [posts, setPosts] = useState([]);
   
    useEffect(() => {
   
       axios.get(APIposts)
       .then(res => setPosts (res.data));
    })

    return (
        <>
        <Header />
        <div className='box-foto'>
          <div className='contain foto1'></div>
          <div className=' contain foto2'></div>
        </div>

           <h1 style={{textDecorationLine:'underline'}}> Deco-INSIDE</h1>

          <div className='test' >
             <p> Sur notre site, nous vous presentons les differentes decorations de cuisine selon les pays, les couleurs, l'atmosphère recherché. Vous la voulez <b>Conviviale, Familiale, Stricte ?
                Style ancien, Coloré, Rustique, Moderne ?</b> Nous avons de tout, jetez y un oeil vous trouverez la votre.
             </p>
               <hr/>
             <p>Trouvez l'idéal pour les familles nombreuses, petites. Si vous etes seul, travailleur et vous voulez un petit cocon pour vous, pour accueillir vos amis.
                  Epatez les avec un style particulier en <b>Bois, Marbre Blanc, Couleur Or </b> etc..
             </p>
          </div>

           <h1> Cliquez sur l'image pour voir les details </h1>

         <div className='flexcontainer'>

            {posts.map((post)=>(
              <Link to = "/login">
              <img src={post.featured_media_src_url}></img>
              </Link>
            ))}
         </div>

        </>
    )
}
