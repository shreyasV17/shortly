import { useState } from 'react';
import { StyledInputbar, StyledForm, StyledText } from './styles/InputBar.styled';
import { Button } from './styles/Button.styled';

const InputBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(term);
    };

    return (
        <StyledInputbar>
            <StyledForm onSubmit={onSubmit}>
                <div>
                    <StyledText>Shorten a link here...</StyledText>
                    <input
                        type="text"
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </StyledForm>
            <Button type="submit">Shorten it!</Button>
        </StyledInputbar>
    );
};

export default InputBar;