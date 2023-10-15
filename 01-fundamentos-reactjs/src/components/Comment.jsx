import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content , onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment () {
   
        onDeleteComment(content)
    }

//setLikeCount(likeCount + 1) could be used. However, whenever you need to update an info and it depends of its OWN previous value, it is a better idea to do as it is below. This happens cause of React Closures.

    function handleLikeComment() {
        setLikeCount((state)=> {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://img.freepik.com/fotos-premium/duck-in-azuki-nft-street-wear-pure-profile_899449-2218.jpg?w=826" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Delete comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}