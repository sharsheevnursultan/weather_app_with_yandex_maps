import React from "react";

const Header=()=>{
    let myTumbler = (elem, elem2, elem3, elem4, elem5) => {
        elem = document.getElementById('color_toggle');
        if (elem.classList.contains('bg-color')) {
            elem.classList.replace('bg-color', 'black-bg-color-without-border')
        } else if (elem.classList.contains('black-bg-color-without-border')) {
            elem.classList.replace('black-bg-color-without-border', 'bg-color')
        }

        elem2 = document.getElementById('color_toggle2');
        if (elem2.classList.contains('main-top-app-name')) {
            elem2.classList.replace('main-top-app-name', 'app-name-black-bg-color');
        } else if (elem2.classList.contains('app-name-black-bg-color')) {
            elem2.classList.replace('app-name-black-bg-color', 'main-top-app-name');
        }

        elem3 = document.getElementById('color_toggle3');
        if (elem3.classList.contains('left-col-bg')) {
            elem3.classList.replace('left-col-bg', 'black-bg-color');
        } else if (elem3.classList.contains('black-bg-color')) {
            elem3.classList.replace('black-bg-color', 'left-col-bg');
        }

        elem4 = document.getElementById('color_toggle4');
        if (elem4.classList.contains('yin-yang-tumbler')) {
            elem4.classList.replace('yin-yang-tumbler', 'white-yin-yang-tumbler');
        } else if (elem4.classList.contains('white-yin-yang-tumbler')) {
            elem4.classList.replace('white-yin-yang-tumbler', 'yin-yang-tumbler');
        }

        elem5 = document.getElementById('color_toggle5');
        if (elem5.classList.contains('left-col-bg')) {
            elem5.classList.replace('left-col-bg', 'black-bg-color');
        } else if (elem5.classList.contains('black-bg-color')) {
            elem5.classList.replace('black-bg-color', 'left-col-bg');
        }
    };
    return(
        <h1 id='color_toggle2' className='card main-top-app-name'>
            Погода
            <span onClick={myTumbler}
                  title='Тёмный режим'>
                            <svg aria-hidden="true"
                                 focusable="false"
                                 data-prefix="fas"
                                 data-icon="yin-yang"
                                 className="yin-yang-tumbler"
                                 role="img" id='color_toggle4'
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 496 512">
                                <path
                                    d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"/>
                            </svg>
                        </span>
        </h1>
    )
}
export default Header;