import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;

}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    return (
        /* below we're using the prop hasBorder as a boolean to apply or not a certain style in our component*/
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props} />

    );
}