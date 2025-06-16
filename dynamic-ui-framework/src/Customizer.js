(() => {
  const inputs = document.querySelectorAll('.customizer-panel [data-var]');
  const root = document.documentElement;

  const defaults = {
    '--radius-md': '8px',
    '--glow-strength': '0.3',
    '--font-size-base': '1rem',
    '--color-accent-light': '#ff0077'
  };

  function loadSettings() {
    inputs.forEach(input => {
      const varName = input.dataset.var;
      let savedValue = localStorage.getItem(varName);

      if (savedValue !== null) {
        if (input.type === 'color' || input.tagName.toLowerCase() === 'select') {
          input.value = savedValue;
        } else if (input.type === 'range') {
          if (varName.includes('radius')) {
            input.value = parseInt(savedValue);
          } else if (varName.includes('glow')) {
            input.value = parseFloat(savedValue);
          } else {
            input.value = savedValue;
          }
        }
        root.style.setProperty(varName, savedValue);
      } else {
        if (defaults[varName]) {
          root.style.setProperty(varName, defaults[varName]);
          if(input.type === 'range') {
            input.value = parseFloat(defaults[varName]);
          } else {
            input.value = defaults[varName];
          }
        }
      }
    });
  }

  function handleInputChange(e) {
    const input = e.target;
    const varName = input.dataset.var;
    let value = input.value;

    if (varName.includes('radius')) {
      let num = Number(value);
      if (isNaN(num) || num < 0) num = 0;
      else if (num > 40) num = 40;
      value = num + 'px';
      input.value = num;
    } else if (varName.includes('glow')) {
      let num = parseFloat(value);
      if (isNaN(num) || num < 0) num = 0;
      else if (num > 1) num = 1;
      value = num.toFixed(2);
      input.value = num;
    }

    root.style.setProperty(varName, value);
    localStorage.setItem(varName, value);
  }

  inputs.forEach(input => input.addEventListener('input', handleInputChange));

  loadSettings();

  
})();
