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
  axios.put(`${url}/${newContact.id}`, newContact);
}
export default {
  handleId,
  saveContact,
  deleteContact,
  updateContact,
};
