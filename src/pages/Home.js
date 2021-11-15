import gettopalbums from '../utils/gettopalbums';

const Home =  async () => {
    const user = await gettopalbums();
   
    const view =  `
        <div class="Albums">
        ${user.topalbums.album.map(album => `
        <article class="Character-item">
            <a href="#/${album.name}-${album.artist.name}/">
            <h2>${album.name}</h2>
            <img src="${album.image[2]["#text"]}" alt="${album.name}" />
            </a>
        </article>
                `).join('') }
        </div  
            `
    return view;
}

export default Home;