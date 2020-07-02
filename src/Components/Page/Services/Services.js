import React from "react";

class Services extends React.Component {
    render() {
        const name = this.props.match.params.name;
        return (
            <main id="inner-content">
                <h1>Services Details Page</h1>
                <section>
                    <strong>List:</strong>
                    <p>Elder care Services</p>
                    <p>Care Taker Services</p>
                    <p>Nursing care at Home</p>
                    <p>ICU Care Services</p>
                    </section>
                    <section>
                    <strong>Address:</strong>
                    <address>
                        <strong>Example Inc.</strong><br/>
                        1234 Example Street<br/>
                        India, Example 0987<br/>
                        <abbr title="Phone">P:</abbr> (123) 456-7890
                    </address>
                    </section>
            </main>
        )
    }
}
export default Services;