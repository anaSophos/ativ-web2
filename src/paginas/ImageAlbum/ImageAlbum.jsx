import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Titulo from '../../components/Titulo'
import BotaoVoltar from '../../components/BotaoVoltar'
import CardImagem from '../../components/CardImagem'
import Style from './ImageAlbum.module.css'

const ImageAlbum = () => {
    const {id} = useParams
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
      const getAlbum = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`);
        setPhotos(response.data);
        console.log(response)
      } catch (error){
        console.log(error)
      }
    };
      getAlbum();
    }, [id]);

  return (
    <div>
        <BotaoVoltar to={'/albums'}/>
        <ul className={Style.base}>
           {photos.map((photo) => (
            <div key={photo.id}>
                <CardImagem to={`/photos/${photo.id}`} url={photo.url}/>
            </div>
        ))}
        </ul>
    </div>
  )
}

export default ImageAlbum