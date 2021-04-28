//Functions that send POST to server with file and calulates % and speed of upload
function uploadFile() {
	let bar = document.getElementById("bar")
	let eta = document.getElementById("eta")
	document.getElementById("upload").style = "display:none;";
	eta.hidden = false

	let arrayOfBirate = [];
	let timeLeftHumanReadble;

	if (	//checks if file is to large to upload
		theFile.size > document.getElementById("maxFileSize").attributes[1].value
	) {
		let size = (document.getElementById("maxFileSize").attributes[1].value / 1024 / 1024).toFixed(0)
		window.alert("That file is to large! Max " + size +"MB!");
	} else {
		let formData = new FormData();
		let xhr = new XMLHttpRequest();

		let t0 = 0;
		let d0 = 0;

		//adds to file to formData
		formData.append("file", theFile);
		formData.append("title", document.getElementById("Title").value);
		formData.append("desc", document.getElementById("Description").value);
		formData.append(
			"maxDownloads",
			document.getElementById("maxDownload").value
		);

		//runs when return from server
		xhr.onreadystatechange = function () {
			if (this.status == 201) {
				successView(this.response);
			} else if (this.status == 500) {
				errorView();
			}
		};

		//runs during upload and calulates % & speed
		xhr.upload.onprogress = function (e) {

			MBps =
				e.loaded > 0
					? ((e.loaded - d0) * 0.00000095367432) /
					  ((performance.now() - t0) / 1000)
					: 0;

			if (arrayOfBirate.length > 19) arrayOfBirate.shift();

			arrayOfBirate.push(MBps);

			MBps =
				arrayOfBirate.reduce((a, b) => {
					return a + b;
				}) / arrayOfBirate.length;

			let timeLeft = ((e.total - e.loaded) * 0.00000095367432) / MBps;

			timeLeftHumanReadble =
				timeLeft > 60
					? (timeLeft / 60).toFixed(1) + "m"
					: timeLeft.toFixed(1) + "s";

			//console.log(e.loaded / e.total * 100);
			var length = (e.loaded / e.total) * 100;
			var whats_left = 100 - length;

			document.getElementById("timeleft").innerText = timeLeftHumanReadble + " remaining"
			document.getElementById("mbps").innerText = MBps.toFixed(2) + " MB/s"

			let innerBar = document.getElementById("innerBar");

			innerBar.style.width = length + "%";

			innerBar.style.transition = "all " + 0.5 + "s";

			t0 = performance.now();
			d0 = e.loaded;
		};

		//opens and send post request to server
		xhr.open("POST", "/uploadFile");
		xhr.send(formData);
	}
}

function successView(id) {
	document.getElementById("eta").style = "display:none";
	document.getElementById("upload").style = "display:none;";
	document.getElementById("cardtitle").innerText =
		'Your file "' + theFile.name + '" was succesfully uploaded!';
	document.getElementById("message").hidden = false;
	console.log(id);
	document.getElementById("downloadLink").href = "/download?file=" + id;
}

function errorView() {
	document.getElementById("eta").style = "display:none";
	document.getElementById("upload").style = "display:none;";
	document.getElementById("errortitle").innerText =
		'Your file "' + theFile.name + '" was not uploaded!';
	document.getElementById("error").hidden = false;
}

let theFile;

const dropzone = document.getElementById("drop");
const fileField = document.getElementById("fileField");
const uploadBtn = document.getElementById("uploadBtn");

dropzone.ondragover = () => {
	dropzone.className = "dragover";
	return false;
};

dropzone.ondragleave = () => {
	dropzone.className = "";
	return false;
};

dropzone.onclick = () => {
	document.getElementById("fileField").click();
};

dropzone.ondrop = (e) => {
	e.preventDefault();
	this.className = "";
	theFile = e.dataTransfer.files[0];
	changeContent();
};

uploadBtn.onclick = () => {
	uploadFile();
};

fileField.onchange = () => {
	if (fileField.files[0]) {
		theFile = fileField.files[0];
		changeContent();
	}
};

function changeContent() {
	document.getElementById("fileName").innerText = theFile.name;
	document.getElementById("fakeForm").hidden = false;
	document.getElementById("drop").style = "display:none;";
}
