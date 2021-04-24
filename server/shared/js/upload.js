//Functions that send POST to server with file and calulates % and speed of upload
function uploadFile() {
	//checks if file is to large to upload
	if (
		theFile.size > document.getElementById("maxFileSize").attributes[1].value
	) {
		console.log("you dum dum");
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
				console.log("File uploaded");
				successView();
			} else if (this.status == 500) {
				console.log("unkown error");
			}
		};

		//runs during upload and calulates % & speed
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

		//opens and send post request to server
		xhr.open("POST", "/uploadFile");
		xhr.send(formData);
	}
}

function successView() {
	document.getElementById("upload").style = "display:none;";
	document.getElementById("cardtitle").innerText = "Your file \"" + theFile.name + "\" was succesfully uploaded!"
	document.getElementById("message").hidden = false;
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
	console.log(fileField.files[0]);
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
