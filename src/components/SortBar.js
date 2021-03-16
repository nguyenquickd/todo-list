import { React } from 'react';

import Button from 'react-bootstrap/Button';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export default function SortBar() {

    return (
        <>
            <DropdownButton id="sortBy" title="Sort by" variant="secondary">
                <Dropdown.Item href="#/action-1">Level up</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Level douwn</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Name-asc</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Name-desc</Dropdown.Item>
            </DropdownButton>
            <Button variant="success">NAME</Button>
        </>
    )
}