import request from './config_request';
const url = "/api/people"
import { createPeople, updatePeople } from '../interfaces/people.interface';

function create(people: createPeople) {
  return request._post(url, people);
}

function update(people: updatePeople) {
  const { id, ...data } = people;
  return request._put(url + "/" + id, data);
}

function get() {
  return request._get(url);
}

export default {
  create,
  update,
  get
}