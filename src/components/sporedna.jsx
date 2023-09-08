
function ConditionalRendering(props) {
    let rez = props.num > 5 ? 'Primjer je veći od 5' : 'Primjer je manji od 5';
    return <>
    <h1>ConditionalRendering {props.num}</h1>
    { props.num && rez }
    </>
}

export { ConditionalRendering };