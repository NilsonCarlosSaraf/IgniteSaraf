import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src }) {
    return (
        /* below we're using the prop hasBorder as a boolean to apply or not a certain style in our component*/
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src} />

    );
}