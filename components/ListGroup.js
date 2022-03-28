import ListItem from "./ListItem";

const ListGroup = () => {
    // const renderedList = links.map(link => {
    //     return <ListItem key={link.code} link={link} />;
    // });

    return (
        <div>
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
    );
};

export default ListGroup;