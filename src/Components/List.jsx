import ListItem from "./ListItem";

const List = (props) => {
    return (
        <>
            {props.list.map((item) =>
                (<ListItem items ={item}/>)
            )}
        </>

    );
};

export default List;