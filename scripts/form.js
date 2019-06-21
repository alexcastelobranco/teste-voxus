$('input').focusin(event => {
  const _self = event.target
  const placeholder = _self.placeholder;

  if (placeholder !== '') {
    _self.placeholder = '';
    $(_self).before(`<label class="label-input">${placeholder}</label>`);
  }
});

$('input').focusout(event => {
  const _self = event.target;
  const placeholder = _self.previousElementSibling;

  if (!_self.value) {
    _self.placeholder = placeholder.innerText;
    event.target.previousSibling.remove();
  }
});



function submit(e) {
  debugger;
}

function validate(e) {
  e.preventDefault();

  const form = document.getElementById('form')
  const inputs = form.querySelectorAll('input', 'select')

  inputs.forEach(input => {
    return applyErrors(input);
  })
}

function applyErrors(input) {
  let span = document.createElement('span')
  span.classList.add('error');
  span.innerText = 'Campo obrigatorio'

  input.after(span);
  // <span class="error">Campo obrigatorio</span>
}