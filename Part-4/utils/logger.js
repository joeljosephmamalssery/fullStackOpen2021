const Dbconnected = () => {
  console.log('connected to MongoDB');
};
const error = (message) => {
  console.log('error connecting to MongoDB:', message);
};
const port = (portNumber) => {
  console.log(`Server running on port ${portNumber}`);
};
const info = (label, item) => {
  console.log(label, ' : ', item);
};

module.exports = { Dbconnected, error, port, info };
