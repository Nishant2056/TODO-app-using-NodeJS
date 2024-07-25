//database connection
import pkg from "pg";

const { Client } = pkg;

const client = new Client({
  user: "postgres",
  password: "uniglobetosxc",
  host: "localhost",
  port: "5432",
  database: "todoapp",
});
client.connect();
try {
  console.log("Your database is connected succesfully.");
} catch (err) {
  console.error("Database connection Unsuccessful. Try again!!", err.stack);
}

export default client;
