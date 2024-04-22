//https://rapidapi.com/


const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCq0OueAsdxH6b8nyAspwViw&part=snippet%2Cid&order=date&maxResults=15'

const content = null || document.getElementById('content')


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

(async () => {
    try {
        const videos = await fetchData (API)
        let view = `
        ${videos.items.map(video => `
                <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
                </div>
            </div>       
        `).slice(0,4).join('')}
     
        `

    }catch {

    }
})();
