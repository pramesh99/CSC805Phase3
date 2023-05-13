import { Col, Row, Card, Container, Image } from "react-bootstrap";
import line from "../pics/Line.png";
import meanPie from "../pics/MeanIncomePie.png";
import medianPie from "../pics/MedianIncomePie.png";

const IncomeChart = () => {
    return (
        <div style={{background: "#191a1b"}} className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <Card style={{background: "#5c3f9e", borderRadius: "40px"}}>
                    <Row className="align-items-center viewport-height mb-3">
                        <Col md={7}>
                            <Image style={{padding: "20px", borderRadius: "40px"}} src={meanPie} fluid/>
                        </Col>
                        <Col md={5}>
                            <h4 style={{color: "#e7c06b", padding: "0.5em"}} className='fw-light text-break'>
                            The pie chart displays the mean income of individuals over several years, ranging from 1977 to 2020/21. Each slice represents a year and its corresponding mean income. The chart shows that the mean income has increased steadily over the years, with a few fluctuations. The highest mean income is observed in the year 2020/21, while the lowest mean income is seen in the year 1977. The pie chart is color-coded, with each slice having a different shade of color. The legend on the right side of the chart shows the corresponding year for each color. Overall, the chart provides a clear visualization of the changes in mean income over the years.             
                            </h4>
                        </Col>
                    </Row>

                    <Row className="align-items-center viewport-height mb-3">
                        <Col md={7}>
                            <Image style={{padding: "20px", borderRadius: "40px"}} src={medianPie} fluid/>
                        </Col>
                        <Col md={5}>
                            <h4 style={{color: "#e7c06b", padding: "0.5em"}} className='fw-light text-break'>
                            The following pie chart is generated to visualize the median income of individuals over the past few years. The chart shows data for 18 years ranging from 1977 to 2020/21. Each year is represented by a slice of the pie, and the size of the slice represents the median income for that year. The colors of the slices are generated using a color scale called "turbo." The chart shows an overall increasing trend in median income over the years, with some fluctuations in between. The title of the chart is "Median income of Individual over the past few years."
                            </h4>
                        </Col>
                    </Row>
                    <Row className="align-items-center viewport-height">
                        <Col md={7}>
                            <Image style={{padding: "20px", borderRadius: "40px"}} src={line} fluid/>
                        </Col>
                        <Col md={5}>
                            <h4 style={{color: "#e7c06b", padding: "0.5em"}} className='fw-light text-break'>
                                The line chart shows the distribution of average household mean and median income in UK over the years from 1975 to 2020. The line chart shows how the median income has increased during the 10 years leading up to the financial year ending 2020. Median and mean real equivalised household disposable income of individuals, UK for the following years. The estimates of income for the years were being adjusted for under coverage of top earners.             
                            </h4>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

export default IncomeChart;