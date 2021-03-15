import { useParams } from 'react-router-dom';


const ComicsDetails = ({comics}) => {
   console.log('comics', comics);
   const { comicID } = useParams();
   console.log('comicID', comicID);
   
   const comicBook = comics[comicID - 1];
   console.log('comicBook', comicBook);
    return (
    
        <>
         <h1>{comicBook.name} Was Released in {comicBook.published}</h1>
         <p>Issue # {comicBook.issue}</p>
         <h3>{comicBook.details}</h3>
         <h4>Writer: {comicBook.writer}</h4>
         <h5>Cover Artist: {comicBook.cover_artist} </h5>

         </>     
       
    )
}
  


export default ComicsDetails;