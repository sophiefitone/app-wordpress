import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header2 from './header2';


export default function Posts() {

 let APIposts ='http://localhost/wordpress/wp-json/wp/v2/posts'

 const [posts, setPosts] = useState([]);

 useEffect(() => {

    axios.get(APIposts)
    .then(res => setPosts (res.data));
 })

    return (
      <>
      <Header2 />
      <div className ='body2'>

      <div className='test2' >
             <p> Sur notre site, nous vous presentons les differentes decorations de cuisine selon les pays, les couleurs, l'atmosphère recherché. Vous la voulez <b>Conviviale, Familiale, Stricte ?
                Style ancien, Coloré, Rustique, Moderne ?</b> Nous avons de tout, jetez y un oeil vous trouverez la votre.
             </p>
               <hr/>
             <p>Trouvez l'idéal pour les familles nombreuses, petites. Si vous etes seul, travailleur et vous voulez un petit cocon pour vous, pour accueillir vos amis.
                  Epatez les avec un style particulier en <b>Bois, Marbre Blanc, Couleur Or </b> etc..
             </p>
          </div>
       <div className='flexcontainer2'>
     
         { posts.map((post) =>(
            
            <Card key={post.id} style={{ width: '20rem', margin: "17px 20px 12px 60px" }}>
                <Card.Img variant="top" src={post.featured_media_src_url} /><Card.Body>
                   <Card.Title style={{ fontSize: "30px" }}> {post.title.rendered} </Card.Title>
                   <Link to={`/posts/${post.id}`} className="btn btn-warning">View post</Link>
                </Card.Body>
             </Card>
              
))}
       </div>
      </div>
</>
        
    )
}
