const fs = require("fs");
const config = require("./core/config").config();
var options = {
	key: fs.readFileSync(config.key),
	cert: fs.readFileSync(config.cert),
	// ca: fs.readFileSync(config.ca),
	requestCert: true,
	rejectUnauthorized: false,
};

const app = require("express")();
const server = require("https").Server(options, app);
const io = require("socket.io")(server);
// Need to send io to socket module

module.exports = io;
app.use(function (req, res, next) {
	var allowedOrigins = [
		"https://tedev.truenergygroup.com",
		"https://teapps.truenergygroup.com",
		"https://cpm.truenergygroup.com",
        "https://testcrm.truenergygroup.com"
	];
	var origin = req.headers.origin;
	if (allowedOrigins.indexOf(origin) > -1) {
		res.setHeader("Access-Control-Allow-Origin", origin);
	}

	res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
	res.header("Access-Control-Allow-Credentials", true);

	return next();
});

io.sockets.on("connection", require("./sockets/socket.js"));

const qc = require('./models/qc_model');


qc.pullLeadInfo(13622196, 10730, (data) => {
    console.log(data.lead.lsloa_ver_by);
});
    




//Start the server
server.listen(config.port, () => {
	console.log("server listening on port: " + config.port);
});
