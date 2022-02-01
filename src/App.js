import './App.css';
//import axios from 'axios';
import Home from './components/home';
import Pages from './components/pages';
import Posts from './components/posts';
import { Route, Routes } from 'react-router-dom';
import View from './components/view';
import Login from './components/login';
import Register from './components/register';



/*let APImenu ='http://localhost/wordpress/wp-json/wp-api-menus/v2/menus/2'
let APIposts ='http://localhost/wordpress/wp-json/wp/v2/posts'
let APIusers='http://localhost/wordpress/wp-json/wp/v2/users'
let APIcategories='http://localhost/wordpress/wp-json/wp/v2/categories'
let APIpages ='http://localhost/wordpress/wp-json/wp/v2/pages'*/



//axios.get(APIpages).then(res => console.log(res.data));
//axios.get(APImenu).then(res => console.log(res.data));
//axios.get(APIposts+'?slug=maine-coon').then(res => console.log(res.data));
//axios.get(APIposts).then(res => console.log(res.data));
//axios.get(APIcategories).then(res => console.log(res.data));
//axios.get(APIusers).then(res => console.log(res.data));



function App() {
  return (
    <>
     
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/pages" element={<Pages />} />
        <Route path ="/posts" element={<Posts />} />
        <Route path ="/posts/:id" element={<View />} />
        <Route path ="/login" element={<Login />} />
        <Route path ="/register" element={<Register />} />
      </Routes>
    
   </>
   
  );
}

export default App;
