import React, { Component } from 'react'
import {
    Header,
    Segment
} from 'semantic-ui-react';
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <Segment basic inverted>
                <Header textAlign={'center'} as='h1'> Employee Management System</Header>
            </Segment>
        )
    }
}

export default HeaderComponent;