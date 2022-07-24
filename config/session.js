const expressSession = require('express-session');

const mongoDbStore = require("connect-mongodb-session");

function createSessionStore() {
	const MongoDbStore = mongoDbStore(expressSession);

	const store = new MongoDbStore({
		uri: "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.3.1",
		databaseName: "online-shop",
		collection: "sessions",
	});
	return store;
}

function createSessionConfig() {
	return {
		secret: "super-secret",
		resave: false,
		saveUninitialized: false,
		store: createSessionStore(),
		cookie: {
			maxAge: 30 * 24 * 60 * 60 * 1000,
		},
	};
}

module.exports=createSessionConfig;
