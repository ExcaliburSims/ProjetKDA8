const InputField = ( props ) => {
    return (
        <>
            <input id={props.id} type={props.type} placeholder={props.placeholder} value={props.value} name={props.name} />
        </>
    );
};

export default InputField;
