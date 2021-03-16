import { React } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function TableTask() {

    return (
        <>
            <Table responsive="xs" striped="True">
                <thead>
                    <tr>
                        List task
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="col-xs-1">#</th>
                        <th className="col-xs-6">Task</th>
                        <th>Level</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td colSpan="9">Task</td>
                        <td>
                            <Button variant="primary" size="sm">
                                Small button
                            </Button>
                        </td>
                        <td>
                            <Button variant="warning">Edit</Button>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td colSpan="9">Task</td>
                        <td>
                            <Button variant="primary" size="sm">
                                Small button
                            </Button>
                        </td>
                        <td>
                            <Button variant="warning">Edit</Button>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="9">Task</td>
                        <td>
                            <Button variant="primary" size="sm">
                                Small button
                            </Button>
                        </td>
                        <td>
                            <Button variant="warning">Edit</Button>
                            <Button variant="danger">Delete</Button>
                        </td>
                    </tr>
                    <tr></tr>
                </tbody>
            </Table>
        </>
    )
}