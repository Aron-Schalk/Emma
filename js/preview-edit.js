// Preview edit section toggle
export default class PreviewToggle {
	constructor() {
		this.elements = {
			togglebutton: document.querySelector('.button-preview'),
			collapsebutton: document.querySelector('.button-collapse'),
			applybutton: document.querySelector('.button-apply'),
			previewsection: document.querySelector('.preview-edit')
			 
		};

		if(this.elements.togglebutton){
			this.elements.togglebutton.addEventListener('click', this.toggle.bind(this));
		}
		if(this.elements.applybutton){
			this.elements.applybutton.addEventListener('click', this.toggle.bind(this));
		}
		if(this.elements.collapsebutton){
			this.elements.collapsebutton.addEventListener('click', this.toggle.bind(this));
		}
	}

	toggle() {
		this.elements.togglebutton.classList.toggle('button-preview--show');
		this.elements.collapsebutton.classList.toggle('button-collapse--show');
		this.elements.applybutton.classList.toggle('button-apply--show');
		this.elements.previewsection.classList.toggle('preview-edit--show');
	}
}

