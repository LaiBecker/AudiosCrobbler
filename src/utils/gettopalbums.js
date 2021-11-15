const key ='b568fde1c4b43d114514fa9e8c968456';
//const API = 'https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=b568fde1c4b43d114514fa9e8c968456&format=json';
const API = 'https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=rj&api_key=b568fde1c4b43d114514fa9e8c968456&format=json';
const gettopalbums = async () => {
    const apiURL = API;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log('Fetch Error..!!', error);
    };
    
};

export default gettopalbums;