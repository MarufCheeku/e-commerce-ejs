const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
	const client = await MongoClient.connect(
		"mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.3.1"
	);
	database = client.db("online-shop");
}

function getDb() {
	if (!database) {
		throw new Error("You must connet first!");
	}

	return database;
}

module.exports = {
	connectToDatabase: connectToDatabase,
	getDb: getDb,
};
