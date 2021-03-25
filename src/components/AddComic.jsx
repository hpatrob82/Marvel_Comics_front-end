import { useState } from 'react';

const AddComic = ({ handleReload }) => {
    const [comicName, setComicName] =useState('');
    const [comicPublished, setComicPublished] = useState('');
    const [submitError, setSubmitError] = useState(null);


const _handleSubmit = async (e) => {
    e.preventDefault();
const submitResponse = await fetch("https://marvel-comi-api.herokuapp.com", {
    headers: { 'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify({ comic_name: comicName, comic_published: comicPublished}),
}).then((response) => response);
console.log('submit response is,', submitResponse.status);
setComicName('');
setComicPublished('');

    if (submitResponse.status === 200) {
        handleReload(true);
    } else {
        setSubmitError(submitResponse.statusText);
    }
};
    const _handleName = (e) => {
        setComicName(e.target.value);
    };

    const _handlePublished = (e) => {
        setComicPublished(e.target.value)
    };

    return(
        <>
        <form onSubmit={_handleSubmit}>
            <label>
                Comic Name <input type='text' name='comicName' value={comicName} onChange={_handleName}/>
            </label>
            <label>
                Comic Published in: <input type='text' name='comicPublished' value={comicPublished} onChange={_handlePublished} />
            </label>
            <button type='submit'>Add Comic</button>
        </form>
        {!!submitError && <div className='error'>{submitError}</div>}
        </>
    );
};

export default AddComic;