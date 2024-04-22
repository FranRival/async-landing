//https://rapidapi.com/

const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCq0OueAsdxH6b8nyAspwViw&filter=videos_latest&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9dee01037dmsh09060f7a4c01728p15a293jsn8f00d37be8a1',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}