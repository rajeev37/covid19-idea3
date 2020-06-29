import React from "react";
import { Chart } from "react-google-charts";
class RightSection extends React.Component {
    render() {
        return (
            <section className="r-content">
                <h1>Home</h1>
                <Chart
                    width={'350px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Work', 11],
                        ['Eat', 2],
                        ['Commute', 2],
                        ['Watch TV', 2],
                        ['Sleep', 7],
                    ]}
                    options={{
                        title: 'My Daily Activities',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </section>
        );
    }
}
export default RightSection;