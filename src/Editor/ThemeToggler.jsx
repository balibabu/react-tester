import React, { useState } from 'react'
import DarkTheme from '../icons/DarkTheme'
import LightTheme from '../icons/LightTheme'

export default function ThemeToggler({ theme, setTheme }) {
    function toggle() {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('editor-theme','dark')
        } else {
            setTheme('light');
            localStorage.setItem('editor-theme','light')
        }
    }
    return (
        <div style={{ width: '24px' }} onClick={toggle}>
            {
                theme === 'light' ?
                    <>
                        <DarkTheme />
                    </>
                    :
                    <>
                        <LightTheme />
                    </>
            }
        </div>
    )
}
