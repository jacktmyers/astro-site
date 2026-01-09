export default function GridEntry(props){
    return(
        <a href={props.path}>
        <div className="gridEntry" >
            {props.image}
            <div className="gridEntryLabel">{props.name}</div>
        </div>
        </a>
    )
}