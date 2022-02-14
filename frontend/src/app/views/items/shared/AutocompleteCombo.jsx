import React, { Fragment, useState, useEffect } from 'react'
import { TextField, Autocomplete } from '@mui/material'
import axios from '../../../../axios'

const AutocompleteCombo = ({ getPath, label, setInputFormValue, value }) => {

    const [suggestions, setSuggestions] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        // Get all components from backend
        axios.get(getPath).then(res => {
            setSuggestions(res.data)
        })
    }, []);

    useEffect(() => {
        if (value == null) {
            setInputValue({ description: '' });
        }
    }, [value]);

    return (
        <Fragment>
            <Autocomplete
                options={suggestions}
                getOptionLabel={(option) => option.description}
                value={inputValue}
                onChange={(event, newValue) => {
                    setInputFormValue(newValue);
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={label}
                        variant="outlined"
                        fullWidth
                    />
                )}
            />
        </Fragment>
    )
}

export default AutocompleteCombo
