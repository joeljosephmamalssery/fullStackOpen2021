import axios from 'axios';

const url = 'http://localhost:3001/persons';
function handleId() {
  const myRnId = () => parseInt(Date.now() * Math.random());
  return myRnId();
}
function saveContact({ newContact }) {
  axios.post(`${url}`, newContact);
}
function deleteContact(id) {
  axios.delete(`${url}/${id}`);
}
function updateContact(newContact) {
  let x = 0;
  axios
    .put(`${url}/${newContact.id}`, newContact)
    .then((response) => {
      return response;
    })
    .catch(function (error) {
      if (error.response) {
        // Request made and server responded

        x = error.response.status;
      } else if (error.request) {
        // The request was made but no response was received
        console.log(x);
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    });
  console.log(x);
}
export default {
  handleId,
  saveContact,
  deleteContact,
  updateContact,
};
