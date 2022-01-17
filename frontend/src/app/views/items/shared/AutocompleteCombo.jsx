import React, { Fragment, useState, useEffect } from 'react'
import { TextField, Autocomplete } from '@mui/material'
import axios from '../../../../axios'

const AutocompleteCombo = ({ getPath, label, setInputValue }) => {

    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        // Get all components from backend
        axios.get(getPath).then(res => {
            setSuggestions(res.data)
        })
    }, []);

    return (
        <Fragment>
            <Autocomplete
                options={suggestions}
                getOptionLabel={(option) => option.description}
                onChange={(event, newValue) => {
                    if (newValue) {
                        setInputValue(newValue);
                    } else {
                        setInputValue(null);
                    }
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
