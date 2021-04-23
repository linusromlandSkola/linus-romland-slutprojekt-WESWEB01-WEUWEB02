document
	.getElementById("uploadForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		uploadFile();
	});

function uploadFile() {
	const file = document.getElementById("fileField").files[0];
	if (file.size > document.getElementById("maxFileSize").attributes[1].value) {
        console.log("you dum dum")
	} else {
		let formData = new FormData();
		let xhr = new XMLHttpRequest();

		let t0 = 0;
		let d0 = 0;

		formData.append("file", file);

		xhr.onreadystatechange = function () {
			if (this.status == 200) {
				console.log("cool done i thknk");
			}
		};

		xhr.upload.onprogress = function (e) {
			MBps =
				e.loaded > 0
					? ((e.loaded - d0) * 0.00000095367432) /
					  ((performance.now() - t0) / 1000)
					: 0;
			let timeLeft = ((e.total - e.loaded) * 0.00000095367432) / MBps;
			timeLeftHumanReadble =
				timeLeft > 60
					? (timeLeft / 60).toFixed(1) + "m"
					: timeLeft.toFixed(1) + "s";

			console.log((e.loaded / e.total) * 100);
			var length = (e.loaded / e.total) * 100;
			var whats_left = 100 - length;

			t0 = performance.now();
			d0 = e.loaded;
		};

		xhr.open("POST", "/uploadFile");
		xhr.send(formData);
	}
}
