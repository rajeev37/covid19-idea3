import React from "react";

class Services extends React.Component {
    render() {
        const name = this.props.match.params.name;
        return (
            <main id="inner-content">
                <h1>Services Page--{name}</h1>
            </main>
        )
    }
}
export default Services;