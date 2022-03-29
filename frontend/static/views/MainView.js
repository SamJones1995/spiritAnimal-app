import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("SP App");
  }

  async getHtml() {
    return `
    <h1>Are you prepared to meet your new Spirit Animal Guide?</h1>
    <p>
      Click below and fate will decide your chosen Spirit Animal
    </p>
    <a href="/" data-link>Find your animal guide</a>
    <footer class="page-footer">
			<p>Find me on</p>
			<div class="social-media"><img alt="Github" src="img/github_icon.svg"> <img alt="Twitter" src="img/twitter_icon.svg"> <img alt="LinkedIn" src="img/linkedin_icon.svg"></div>
		</footer>
    
    `;
  }
}