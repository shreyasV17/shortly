import { useState } from 'react';
import { StyledInputbar, StyledForm, StyledBackground, StyledSearchContainer, StyledInput } from './styles/InputBar.styled';
import { Button } from './styles/Button.styled';

const InputBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(term);
    };

    return (
        <StyledSearchContainer>
            <StyledInputbar>
                <StyledBackground src='../images/Meteor.svg' alt='' />
                <StyledForm onSubmit={onSubmit}>
                    <StyledInput
                        type="text"
                        placeholder='Shorten a link here...'
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    />
                    <Button type="submit">Shorten it!</Button>
                </StyledForm>
            </StyledInputbar>
        </StyledSearchContainer>
    );
};

export default InputBar;