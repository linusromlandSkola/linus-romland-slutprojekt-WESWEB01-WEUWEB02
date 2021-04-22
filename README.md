# FileUpload
*** ***Currently in development*** ***<br><br>
Since Firefox Send is officially dead...

## Planing

See [`PLANERING.md`](https://github.com/linusromland/FileUpload/blob/master/planingFiles/PLANERING.md)

## What is it?
This will be a file upload page that allows you to upload any file and availble for download (max 7 days after upload). It will be built using NodeJS and use the MongoDB Database. 

## Live Demo
Live Demo will be available once the project is actually somewhat usefull.

## Run it yourself:

To test the server yourself you do this by first cloning the project to your computer (`git clone https://github.com/linusromland/FileUpload`). You then navigate to the folder named `server` using CMD or your Terminal. 
Run `npm i` to install required dependencies. Then you could start the server using one of the following commands:
- `npm run start` (This will start the server with forever)
- `npm run oneStart` (This will start the server with node)
- `npm run devStart` (This will start the server with nodemon)

You can also change setting with `.env`. For more information check `.env File`

## .env File
Before you start the server, you could configure a few things in a file called `.env`. 
You need to create this file yourself and then you could copy the template below. 
Change the setting you would like and then it will automaticly use those settings instead 
of the default. 
### Template:
```
PORT=3000
SECRET=keyboardcat
EMAILADRESS=your@email.com
PASSWORD=yourOnetimePasswordToYourGoogleAccouynt
DOMAIN=localhost:3000
```

# License

Distributed under the MIT License. See <a href="https://github.com/linusromland/FileUpload/blob/master/LICENSE" >`LICENSE`</a> for more information.

