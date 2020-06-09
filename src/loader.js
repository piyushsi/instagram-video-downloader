var myVar;

function myFunction() {
	myVar = setInterval(fetchFunc, 300);
}

function fetchFunc() {
	Array.from(document.querySelectorAll('.tWeCl')).map((video) => {
		var newVideo = document.createElement('a');
		newVideo.className = 'injected_insta_video_downloader';
		newVideo.innerText = 'Click here to Download this Video';
		newVideo.style.textAlign = 'center';
		newVideo.style.background = 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)';
		newVideo.style.color = 'white';
		newVideo.style.cursor = 'pointer';
		newVideo.style.fontSiz = '1rem';
		newVideo.addEventListener('click', () => {
			newVideo.innerText="Downloading is being Started....";
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
					newVideo.innerText="Click here to Download this Video Again";
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
