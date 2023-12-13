// This JavaScript code is just an example and can be modified to add additional functionality to your page.

const heroImage = document.querySelector('#hero img');

heroImage.addEventListener('load', () => {
  // Once the hero image has loaded, fade it in.
  heroImage.classList.add('fade-in');
});
