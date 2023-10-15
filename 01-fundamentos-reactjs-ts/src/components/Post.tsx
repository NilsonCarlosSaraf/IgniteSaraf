import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'


import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';

// estado = variaveis que eu quero que o componente monitore

interface Author {
    name:string;
    role:string;
    avatarUrl:string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    author: Author;
    publishedAt: Date;
    content: Content[];
    id: number,

}

interface PostProps {
     post: PostType;   
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState(['Post muito bacana, hein?!'])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })



    // THI IS AN EXAMPLE ON HOW TO WORK WITH DATES USING THE INTL FROM JS new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit',

    // }).format(publishedAt)

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault() //this line prevents the default action from the form to redirect/refresh a page


        setComments([...comments, newCommentText]);
        setNewCommentText('');

    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete: string) {
        // imutabilidade -> as coisas não sofrem mutação, nós criamos um novo valor (um novo espaco na memoria)
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    {/* property hasBorder is understood by react as "being true" if passed as is is mentioned in this line. There is no need to say hasBorder={true}.However, in this case, were setting hasBorder default value inside the Avatar component */}

                    <Avatar hasBorder src={post.author.avatarUrl} alt="" />

                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong> Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder='Deixe um comentario'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid} //essa propriedade e chamada sempre que o HTML identificar que o o submit do formulario mas o texto era invalido
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment}
                        content={comment}
                        onDeleteComment={deleteComment} />
                })}
            </div>
        </article>

    );
}