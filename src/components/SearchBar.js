import { React } from 'react';

import Button from 'react-bootstrap/Button';

import InputGroup from 'react-bootstrap/InputGroup';
// import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export default function SearchBar() {

    return (
        <div>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search by"
                    aria-label="Search by"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="info">Clear!</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}