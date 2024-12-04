function User({ children, ...antor }) {

    // function User(  ...props) {


    // {console.log(props)}
    // {console.log(props.children)}

    // const { ...children  } = props;
    // const { children  } = props;

    { console.log(children) }
    { console.log(antor) }

    return (
        <div>
            <h1>This is user </h1>
            {/* {props.children} */}
            {children}
        </div>
    )
}

export default User
