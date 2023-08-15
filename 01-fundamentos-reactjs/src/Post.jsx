//Named export vs Named export, the one below is a Named one

// props : { author: "", content: ""}
export function Post (props) {
    console.log(props);
;
    return (
    <div>
        <strong>{props.author}</strong>
        <p>{props.content}</p>
    </div>
    )
}