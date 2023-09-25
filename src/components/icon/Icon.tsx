import React from 'react';
import icons from '../../assets/images/icons.svg'



type IconPropsType = {
    iconId: string
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg width="62" height="54" viewBox="0 0 62 54" fill="none" xmlns="http://www.w3.org/2000/svg">

        <use xlinkHref={`${icons}#${props.iconId}`}/>
        </svg>
    );
};

