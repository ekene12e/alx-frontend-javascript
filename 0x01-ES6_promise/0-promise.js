export default function getResponseFromAPI() {
	return new Promise(function(resolve, reject) {
		let success = true;
		if (success) {
			resolve();
		}else{
			reject();
		}
	});
}