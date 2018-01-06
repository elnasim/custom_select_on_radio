var btnWrapper = document.querySelector('.btn-wrapper');
var dropdownWrapper = document.querySelector('.dropdown-wrapper');
var btn = document.querySelector('.btn');

btnWrapper.addEventListener('click', function (e) {
  e.preventDefault();
  if (!e.target.classList.contains('btn')) return;
  var id = e.target.getAttribute('href');
  var dropdown = document.querySelector(id);
  if (dropdown.classList.contains('hidden')) {
    dropdown.classList.remove('hidden');
    e.target.classList.add('open');
  } else {
    dropdown.classList.add('hidden');
    e.target.classList.remove('open');
  }
});

dropdownWrapper.addEventListener('click', function (e) {
  if (e.target.type != 'radio') return;
  var href = '#' + e.target.getAttribute('name');
  var btn = document.querySelector('a[href="' + href + '"]');
  btn.innerHTML = e.target.value;
});

