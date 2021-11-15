const key ='b568fde1c4b43d114514fa9e8c968456';
const API = 'http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=b568fde1c4b43d114514fa9e8c968456';

const getAlbum = async (album, artist) => {
    const apiURL =`${API}&artist=${artist}&album=${album}&format=json`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Fetch Error..!!', error);
    };
    
};

export default getAlbum;