import React, { useEffect, useState } from 'react'
import CardMenu from '../CardMenu'
import axios from 'axios'

const Menu = () => {
  
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
      const getAlbuns = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
        setAlbums(response.data);
      } catch (error){
        console.log(error)
      }
    };
      getAlbuns();
    }, []);

  return (
    <div>
        <ul>
           {albums.map((album) => (
            <div key={album.id}>
            <CardMenu to={`/albums/${album.id}`} title={album.title}></ CardMenu>
            </div>
        ))}
        </ul>
    
    </div>
  )
}

export default Menu
