import React from 'react';

const subPages = {
    hello: 'Hello world',
    5: '55555555555555555555555555555',
    kuku: 'ku ku ri ku'
}

class DisplayInfo extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return <h1>{subPages[this.props.match.params.whatToPass]}</h1>;
    }
}

export default DisplayInfo;