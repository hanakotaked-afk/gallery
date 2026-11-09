// イメージ元と再解釈作品を比べるスライダー
document.querySelectorAll('.cmp').forEach(function (cmp) {
  var input = cmp.querySelector('input[type="range"]');
  if (!input) return;
  input.addEventListener('input', function () {
    cmp.style.setProperty('--pos', input.value);
  });
});
