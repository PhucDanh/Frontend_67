import React, { Component } from 'react'
import Header from '../../components/Header'
import { Typography, Container, Grid } from "@material-ui/core"
import CourseItem from '../../components/CourseItem'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header>fsdafkldsjflskdjf</Header>
                <Typography component="h2" variant="h3" align="center" gutterBottom>Danh Sách Khóa Học</Typography>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid xs={12} sm={6} md={3} item>
                            <CourseItem></CourseItem>
                        </Grid>
                        <Grid xs={12} sm={6} md={3} item>
                            <CourseItem></CourseItem>
                        </Grid>
                        <Grid xs={12} sm={6} md={3} item>
                            <CourseItem></CourseItem>
                        </Grid>
                        <Grid xs={12} sm={6} md={3} item>
                            <CourseItem></CourseItem>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}
