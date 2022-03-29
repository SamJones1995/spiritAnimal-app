import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("The Zebra");
  }

  async getHtml() {
    return `
    <h1>The Zebra has chosen you!</h1>
    <p>
      Congratulations! You have been selected by the majestic Zebra to be your guide.
    </p>
    <footer class="page-footer">
			<p>Find me on</p>
			<div class="social-media"><img alt="Github" src="img/github_icon.svg"> <img alt="Twitter" src="img/twitter_icon.svg"> <img alt="LinkedIn" src="img/linkedin_icon.svg"></div>
		</footer>
    
    `;
  }
}