import { Button } from './styles/Button.styled';
import { StyledListItem, StyledOriginal, StyledShort } from './styles/ListItem.styled';

const ListItem = () => {
    return (
        <StyledListItem>
            <StyledOriginal><h4>Original Link</h4></StyledOriginal>
            <StyledShort><h4>Short Link</h4></StyledShort>
            <Button><h4>Copy</h4></Button>
        </StyledListItem>
    );
};

export default ListItem;