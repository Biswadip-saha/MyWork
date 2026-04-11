import IdeasApi from '../services/IdeasApi';
import IdeaList from './IdeaList';

class IdeaForm {
	constructor() {
		this._ideaList = new IdeaList();
		this._formModal = document.querySelector('#form-modal');
	}

	addEventListeners() {
		this._form.addEventListener('submit', this.handleSubmit.bind(this));
	}

	render() {
		this._formModal.innerHTML = `
        <form id="idea-form">
            <div class="form-control">
                <label for="idea-text">Enter a Username</label>
                <input type="text" name="username" id="username" required value="${
					localStorage.getItem('username')
						? localStorage.getItem('username')
						: ''
				}"/>
            </div>
            <div class="form-control">
                <label for="idea-text">What's Your Idea?</label>
                <textarea name="text" id="idea-text" required></textarea>
            </div>
            <div class="form-control">
                <label for="tag">Tag</label>
                <input type="text" name="tag" id="tag" required/>
            </div>
            <button class="btn" type="submit" id="submit">Submit</button>
        </form>
        `;
		this._form = document.querySelector('#idea-form');
		this.addEventListeners();
	}

	async handleSubmit(e) {
		e.preventDefault();

		const idea = {
			text: this._form.elements.text.value,
			tag: this._form.elements.tag.value,
			username: this._form.elements.username.value,
		};

		const newIdea = await IdeasApi.createIdea(idea);
		this._ideaList.addIdeaToList(newIdea.data.data); // first data is for axios from IdeaApi file and the next one is for the data inside the object which the endpoint returns

		// Save username to localStorage
		localStorage.setItem('username', this._form.elements.username.value);

		// Clear fields
		this._form.elements.text.value = '';
		this._form.elements.tag.value = '';
		this._form.elements.username.value = '';

		this.render();

		// Close modal after submit
		document.dispatchEvent(new Event('closeModal'));
	}
}

export default IdeaForm;
