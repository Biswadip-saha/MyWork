import axios from 'axios';

class IdeasApi {
	constructor() {
		this._apiurl = '/api/ideas';
	}

	getIdeas() {
		return axios.get(this._apiurl);
	}

	createIdea(data) {
		return axios.post(this._apiurl, data);
	}

	updateIdea(id, data) {
		return axios.put(`${this._apiurl}/${id}`, data);
	}

	deleteIdea(id) {
		const username = localStorage.getItem('username')
			? localStorage.getItem('username')
			: '';
		return axios.delete(`${this._apiurl}/${id}`, {
			data: {
				username,
			},
		});
	}
}

export default new IdeasApi();
