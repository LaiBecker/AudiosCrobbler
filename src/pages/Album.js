import getHash from '../utils/getHash';
import getAlbum from '../utils/getAlbum';

const Album =  async () => {

    let nmbid = getHash();
    nmbid = nmbid.replaceAll('%20', ' ');
    let names = nmbid.split('-')
 

    
    const album = await getAlbum(names[0], names[1]);
    console.log( album);

    const view = `
        <div class="Albums-inner">
            <article class="Albums-card">
                
                <h2>${album.album.name}</h2>
                <img src="${album.album.image[3]["#text"]}" alt="${album.album.name}" />
                
            </article>
            <article class="Albums-card">
            <h3>Name: <span>${album.album.artist}</span></h3>
            <h3>Url: <span>${album.album.url}</span></ </h3>
            <h3>Cantidad reproducciones: <span>${album.album.playcount}</span></ </h3>
            
        </article>
           
        </div> 
    `
    return view
};
export default Album;