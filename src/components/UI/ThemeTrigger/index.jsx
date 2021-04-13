import React,{useState} from 'react'
import styles from './styles.module.scss';

export const ThemeTrigger = ({ onChange }) => {
    const screen = window.innerWidth;
    const [screenWidth, setScreenWidth] = useState(screen);

    return (
        <div style={{ display: "flex", alignItems: "center" }} className="wrapper">
            {screenWidth < 1070 ?
                <p>Сменить тему</p>
                : <></>}
            <div>
                <input onClick={onChange} type="checkbox" id="switch" />
                <label htmlFor="switch">day</label>
            </div>
        </div>
    )
}
