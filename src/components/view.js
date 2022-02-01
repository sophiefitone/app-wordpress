import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header2 from './header2';

export default function View() {

    let APIposts ='http://localhost/wordpress/wp-json/wp/v2/posts/'

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
            <Card key={views.id} style={{ width: '45rem', margin: "20px auto"}}>
                <Card.Img variant="top" src={views.featured_media_src_url} /><Card.Body>
                    <Card.Title style={{ fontSize: "30px" }}> {views.slug} </Card.Title>
                    <Card.Text dangerouslySetInnerHTML={{ __html: views.content.rendered}}></Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Pubblicato il {views.date} </small>
                </Card.Footer>
            </Card> 
        </>
            
     )
        }

        
