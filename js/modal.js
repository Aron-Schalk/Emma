// Modal popup toggle
export default class ModalToggle {
	constructor() {
		this.elements = {
			openbutton: document.querySelector('.button-modal'),
			modal: document.querySelector('.modal'),
			overlay: document.querySelector('.modal-overlay'),
			closebutton: document.querySelector('.button--close'),
			cancelbutton: document.querySelector('.button-cancel')
		};

		this.elements.openbutton.addEventListener('click', this.toggle.bind(this));
		this.elements.overlay.addEventListener('click', this.toggle.bind(this));
		this.elements.closebutton.addEventListener('click', this.toggle.bind(this));
		this.elements.cancelbutton.addEventListener('click', this.toggle.bind(this));
	}

	toggle() {
		this.elements.modal.classList.toggle('modal--active');
		this.elements.overlay.classList.toggle('modal-overlay--active');
	}
}

