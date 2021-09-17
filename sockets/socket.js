const io = require("../node_etiger");
const config = require("../core/config");
module.exports = function (socket) {
	socketCount++;
	userCount(socketCount);
	console.log(new Date() + " Connection Made, The Count Is: " + socketCount);
	if (socketCount == 1) {

	}

	

	socket.on("disconnect", () => {
		socketCount--;
		console.log(
			new Date() + " Dropped Connection, The Count Is: " + socketCount
		);
		userCount(socketCount);
		if (socketCount <= 0) {
			socketCount = 0;
        }
	});
};