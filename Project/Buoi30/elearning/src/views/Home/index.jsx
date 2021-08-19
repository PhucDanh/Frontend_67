import React, { Component } from 'react'
// import Header from '../../components/Header'
import { Typography, Container, Grid } from "@material-ui/core"
import CourseItem from '../../components/CourseItem'
import { connect } from 'react-redux'
import { fetchCourses } from '../../store/action/course'
import Layout from '../../HOCs/Layout'

class Home extends Component {
    render() {
        return (
            <Layout>
                {/* <Header>fsdafkldsjflskdjf</Header> */}
                <Typography component="h2" variant="h3" align="center" gutterBottom>Danh Sách Khóa Học</Typography>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        {this.props.courses.map((item) => {
                            return(
                                <Grid key={item.maKhoaHoc} xs={12} sm={6} md={3} item>
                                    <CourseItem item={item}></CourseItem>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Layout>
        )
    }

    componentDidMount() {
        // dispatch async action to middleware
        this.props.dispatch(fetchCourses)
    }
}

const mapStateToProps = (state) => ({
    courses: state.course.courseList
});

export default connect(mapStateToProps)(Home)