window.onload = () => {
  const progressContainerEl = document.createElement('div');
  progressContainerEl.style.position = 'fixed';
  progressContainerEl.style.width = '100%';
  progressContainerEl.style.height = '5px';
  progressContainerEl.style.backgroundColor = '#f4f4f4';
  progressContainerEl.style.left = 0;
  progressContainerEl.style.top = 0;

  const progressEl = document.createElement('div');
  progressEl.style.width = '0px';
  progressEl.style.height = '5px';
  progressEl.style.backgroundColor = '#65F700';

  progressContainerEl.appendChild(progressEl);
  document.body.appendChild(progressContainerEl);

  let windowScrollPixels = 0;
  let windowScrollPercents = 0;
  const height = document.documentElement.scrollHeight -
  document.documentElement.clientHeight;

  window.addEventListener('scroll', () => {
    windowScrollPixels = document.body.scrollTop ||
    document.documentElement.scrollTop;
    windowScrollPercents = windowScrollPixels / height * 100;
    progressEl.style.width = windowScrollPercents + '%';
  });
};