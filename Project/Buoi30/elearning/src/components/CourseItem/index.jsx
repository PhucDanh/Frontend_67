import React, { Component } from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core"
import { NavLink } from "react-router-dom"

export default class CourseItem extends Component {
    render() {
        const { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc } = this.props.item; 
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        style={{height: "250px"}}
                        image={hinhAnh}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {tenKhoaHoc}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {moTa.substr(0,50) + "..."}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <NavLink to={`/detail/${maKhoaHoc}`}>
                        <Button size="small" color="primary">
                            Chi Tiết
                        </Button>
                    </NavLink>
                </CardActions>
            </Card>
        )
    }
}
