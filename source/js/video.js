const findVideos = () => {
  let video = document.getElementById('video');

  if (video) {
    setupVideo(video);
  }
};

const setupVideo = (video) => {
  let link = document.getElementById('video-link');
  let button = document.getElementById('video-button');

  video.addEventListener('click', () => {
    let iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
    video.classList.add('about__video--active');
  });

  link.removeAttribute('href');
  video.classList.add('about__video--enabled');
};

const createIframe = () => {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?rel=0&showinfo=0&autoplay=1');
  iframe.classList.add('about__preview');

  return iframe;
};

export {findVideos};
