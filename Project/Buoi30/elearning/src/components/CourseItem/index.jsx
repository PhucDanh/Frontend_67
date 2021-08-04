import React, { Component } from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core"

export default class CourseItem extends Component {
    render() {
        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        style={{height: "250px"}}
                        image="https://picsum.photos/200/300"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Chi Tiết
                    </Button>
                </CardActions>
            </Card>
        )
    }
}
