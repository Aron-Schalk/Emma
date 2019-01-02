// Navigation sidebar toggle
export default class NavToggle {
	constructor() {
		this.elements = {
			hamburger: document.querySelector('.hamburger'),
			menu: document.querySelector('.menu'),
			submenutrigger: document.querySelector('.submenu__trigger'),
			submenu: document.querySelector('.submenu')
			 
		};

		if(this.elements.hamburger){
			this.elements.hamburger.addEventListener('click', this.toggle.bind(this));
		}
		if(this.elements.submenutrigger){
			this.elements.submenutrigger.addEventListener('click', this.submenutoggle.bind(this));
		}
	}

	toggle() {
		this.elements.hamburger.classList.toggle('hamburger--cross');
		this.elements.menu.classList.toggle('menu--show');
	}

	submenutoggle() {
		this.elements.submenu.classList.toggle('submenu--show');
	}
}

