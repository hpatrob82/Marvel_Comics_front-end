import { useState, useEffect } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import ComicsDetails from './ComicsDetails';

const ComicsList = ({reload}) => {
    const [comics, setComics] = useState([]);
    const history = useHistory();
    useEffect(() => {
        (async () => {
            const comicsData = await fetch('http://127.0.0.1:3333/comics').then(response => response.json());
            console.log('comicsData', comicsData);
            setComics(comicsData);
        
        })();
    },[reload]);

    return (
        <>
            {!!comics.length ? (
                <>
                <Route exact path='/'>
              <ul>
                  {comics.map((comic, index) => {
                      return (
                      <li key={index}>
                        <Link to={`/comics/${comic.id}`}>{comic.name}</Link>
                      </li>
                      );
                      
                  })}
              </ul>
              </Route>
              <Route path='/comics/:comicID'>
                  <ComicsDetails comics={comics} />
                  <button type="button" onClick={() => history.goBack()}>Go Back</button>
 
              </Route>
              </>
            ) : (
                <p>Loading Comics...</p>
            )}
        </>

    )
}

export default ComicsList;