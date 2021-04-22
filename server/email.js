const nodemailer = require("nodemailer");

const emailadress = process.env.EMAILADRESS;
const password = process.env.PASSWORD;
const domain = process.env.DOMAIN;

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: emailadress,
		pass: password,
	},
});

exports.sendVerificationEmail = (user) => {
	let mailOptions = {
		from: emailadress,
		to: user.email,
		subject: "Verify Account - FileUpload",
		text: `Hello ${user.name}! \n Thank you for creating an account on FileUpload! \n To start uploading files you need to verify your email.\n You do this by pressing the link: \n ${domain}/verifyAccount?user=${user.id} \n\n Thank you, FileUpload Romland.Space`,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});
};
