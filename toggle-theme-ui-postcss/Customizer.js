(() => {
  const inputs = document.querySelectorAll('.customizer-panel [data-var]');
  const root = document.documentElement;

  // 저장된 설정 불러오기
  function loadSettings() {
    inputs.forEach(input => {
      const varName = input.dataset.var;
      const savedValue = localStorage.getItem(varName);
      if (savedValue !== null) {
        if (input.type === 'color' || input.tagName.toLowerCase() === 'select') {
          input.value = savedValue;
        } else if (input.type === 'range') {
          // range는 px 여부 구분 필요
          if (varName.includes('radius')) {
            input.value = parseInt(savedValue);
          } else {
            input.value = savedValue;
          }
        }
        root.style.setProperty(varName, savedValue);
      }
    });
  }

  // 변경시 처리
  function handleInputChange(e) {
    const input = e.target;
    const varName = input.dataset.var;
    let value = input.value;

    // radius는 px 붙이기
    if (varName.includes('radius') && !value.includes('px')) {
      value = value + 'px';
    }

    root.style.setProperty(varName, value);
    localStorage.setItem(varName, value);
  }

  inputs.forEach(input => {
    input.addEventListener('input', handleInputChange);
  });

  // 초기 로드 시 세팅 불러오기
  loadSettings();
})();
