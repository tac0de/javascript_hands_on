const themePresets = {
    light: {
        '--color-accent-light': '#ff0077',
        '--color-bg-light': '#ffffff',
        '--color-text-light': '#222222',
        '--radius-md': '8px',
        '--glow-strength': '0.3',
    },
    dark: {
        '--color-accent-light': '#ff55aa',
        '--color-bg-light': '#111111',
        '--color-text-light': '#eeeeee',
        '--radius-md': '8px',
        '--glow-strength': '0.5',
    },
    coolBlue: {
        '--color-accent-light': '#0077ff',
        '--color-bg-light': '#e0f0ff',
        '--color-text-light': '#003366',
        '--radius-md': '12px',
        '--glow-strength': '0.4',
    }
};


const presetButtons = document.querySelectorAll('.theme-presets button');
const root = document.documentElement;

function applyTheme(themeName) {
    if (!themePresets[themeName]) {
        console.warn(`Unknown theme: ${themeName}`);
        return;
    }
    const theme = themePresets[themeName];
    Object.entries(theme).forEach(([varName, value]) => {
        root.style.setProperty(varName, value);
    });
    localStorage.setItem('selectedTheme', themeName);
}

presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Applying theme:', btn.dataset.theme);
        applyTheme(btn.dataset.theme);
    });
});;

function setSelectedButton(themeName) {
  presetButtons.forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.theme === themeName);
  });
}

presetButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    applyTheme(btn.dataset.theme);
    setSelectedButton(btn.dataset.theme);
  });
});

// 초기 로드 시 선택 상태 표시
const savedTheme = localStorage.getItem('selectedTheme') || 'light';
setSelectedButton(savedTheme);
applyTheme(savedTheme);

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'light';
    applyTheme(savedTheme);
});
