import { useEffect, useState } from 'react';

import { DarkModeSwitch } from 'react-toggledark-mode';

export default function Switcher() {
    

 function useDarkSide() {
const [theme, setTheme] = useState(localStorage.theme);
const colorTheme = theme === 'dark' ? 'light' : 'dark';

useEffect(() => {
const root = window.document.documentElement;
root.classList.remove(colorTheme);
root.classList.add(theme);

// save theme to local storage
localStorage.setItem('theme', theme);
}, [theme, colorTheme]);

return [colorTheme, setTheme];
}
const [colorTheme, setTheme] = useDarkSide();
const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

const toggleDarkMode = checked => {
setTheme(colorTheme);
setDarkSide(checked);
};

return (
<>
<div>
<DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={56} />
</div>
</>
);
}