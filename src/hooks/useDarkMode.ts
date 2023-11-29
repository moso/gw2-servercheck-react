import { useEffect, useState } from 'react';

export default () => {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('color-scheme')
        if (localTheme) {
            setTheme(localTheme)
        }
    }, [])

    return {
        theme,
        toggleTheme,
    }
}
