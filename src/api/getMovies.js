export async function getMovies() {
    const data = await fetch(`https://reactjs-cdp.herokuapp.com/api.json`);
    const parsedData = await data.json();
    return parsedData; 
}