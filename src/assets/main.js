//https://rapidapi.com/


const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCq0OueAsdxH6b8nyAspwViw&part=snippet%2Cid&order=date&maxResults=15'

const url = '';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9dee01037dmsh09060f7a4c01728p15a293jsn8f00d37be8a1',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi, options){
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

