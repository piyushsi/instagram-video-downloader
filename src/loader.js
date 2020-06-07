var myVar;

function myFunction() {
	myVar = setInterval(alertFunc, 300);
}

function alertFunc() {
	Array.from(document.querySelectorAll('.tWeCl')).map((video) => {
		var dd = document.createElement('a');
		dd.className = 'injected_insta_video_downloader';
		dd.innerText = 'Click here to Download this Video';
		dd.style.textAlign = 'center';
		dd.style.background = 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)';
		dd.style.color = 'white';
		dd.style.cursor = 'pointer';
		dd.style.fontSiz = '1rem';

		// dd.target = '_blank';
		// dd.type = 'video/mp4';
		// dd.setAttribute('href', video.src);
		// dd.setAttribute('download', `${video.src.split('/')[5].split('?')[0]}`);

		dd.addEventListener('click', () => {
			dd.innerText="Downloading is being Started....";
			fetch(video.src)
				.then((response) => response.blob())
				.then((blob) => {
					var Hidden = document.createElement('a');
					Hidden.style.display = 'none';
					let url = window.URL.createObjectURL(blob);
					Hidden.href = url;
					if (!window.location.href.includes('/p/')) {
						Hidden.download = `${
							video.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.outerHTML
								.split('FPmhX notranslate MBL3Z')[1]
								.substr(8)
								.split('href')[0]
								.substr(
									1,
									video.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.outerHTML
										.split('FPmhX notranslate MBL3Z')[1]
										.substr(8)
										.split('href')[0].length - 3
								) +
							' - ' +
							video.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.outerHTML
								.split('FPmhX notranslate MBL3Z')[1]
								.substr(8)
								.split('span')[2]
								.substr(
									1,
									video.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.outerHTML
										.split('FPmhX notranslate MBL3Z')[1]
										.substr(8)
										.split('span')[2].length - 3
								) +
							'.mp4'
						}`;
					} else {
						Hidden.download =
							Array.from(document.getElementsByClassName('C4VMK'))[0]
								.innerHTML.split('href')[1]
								.split('<')[0]
								.split('>')[1] +
							' - ' +
							Array.from(document.getElementsByClassName('C4VMK'))[0]
								.innerHTML.split('span')[1]
								.split('<')[0]
								.split('>')[1];
					}

					Hidden.click();
					window.URL.revokeObjectURL(url);
					dd.innerText="Click here to Download this Video Again";
				});
		});
		if (
			video.parentElement.parentElement.parentElement.parentElement.parentElement.outerHTML.includes(
				'injected_insta_video_downloader'
			)
		) {
		} else {
			video.parentElement.parentElement.parentElement.parentElement.parentElement.append(dd);
		}
	});
}
myFunction();
