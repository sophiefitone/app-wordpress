import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header2 from './header2';

export default function View() {

    let APIposts ='http://decoinside.altervista.org/wordpress/wp-json/wp/v2/posts/'

    let params = useParams();
    const [views, setViews] = useState();
   
    useEffect(() => {
   
       axios.get(APIposts + params.id )
       .then(res => setViews (res.data));
       
    })
   
   if (views=== undefined ){
       return <div></div>
   }
   
    return (
        
         <>
         <Header2/>
            <Card key={views.id} style={{ width: '48%', margin: "18px ", float:'left'}}>
                <Card.Img variant="top" src={views.featured_media_src_url} /><Card.Body>
                    <Card.Title style={{ fontSize: "30px", color:"rgb(209, 197, 23)" }}> {views.slug} </Card.Title>
                    <Card.Text dangerouslySetInnerHTML={{ __html: views.content.rendered}}></Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Pubblicato il {views.date} </small>
                </Card.Footer>
            </Card> 
           
           <div className='test3'>
               <h1>LA CUISINE?</h1>
              <p>La cuisine ouverte sur la salle à manger répond à l'envie d'une maison où il fait bon vivre, 
                 conviviale et chaleureuse. Aujourd'hui, elle est un incontournable et représente une demande fréquente auprès des professionnels, peu importe l'espace à disposition.
                 Dans un petit appartement ou une grande villa, la cuisine ouverte sur la salle à manger se pense avec précaution 
              </p>
           </div>
           
         <div className='contain-all '>
            <div class="text-block">
                <p>
                Dans un petit appartement ou une grande villa, la cuisine ouverte sur la salle à manger se pense avec précaution.
                </p>
            </div>
         </div>



        </>
            
     )
        }

        
