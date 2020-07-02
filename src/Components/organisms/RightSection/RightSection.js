import React from "react";
import { Chart } from "react-google-charts";
import Carousel from 'react-bootstrap/Carousel'
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
                <aside class="col-xl-8 stretch-card grid-margin">
                <div class="card bg-dark text-white">
                  <div class="card-body">
                    <h2>Latest news</h2>

                    <div class="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between">
                      <div class="pr-3">
                        <h5>Virus Kills Member Of Advising Iran’s Supreme</h5>
                        <div class="fs-12">
                          <span class="mr-2">Photo </span>10 Minutes ago
                        </div>
                      </div>
                      <div class="rotate-img">
                        <img src="images/dashboard/home_1.jpg" alt="thumb" class="img-fluid img-lg"/>
                      </div>
                    </div>

                    <div class="d-flex border-bottom-blue pb-4 pt-4 align-items-center justify-content-between">
                      <div class="pr-3">
                        <h5>Virus Kills Member Of Advising Iran’s Supreme</h5>
                        <div class="fs-12">
                          <span class="mr-2">Photo </span>10 Minutes ago
                        </div>
                      </div>
                      <div class="rotate-img">
                        <img src="images/dashboard/home_2.jpg" alt="thumb" class="img-fluid img-lg"/>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </section>
        );
    }
}
export default RightSection;