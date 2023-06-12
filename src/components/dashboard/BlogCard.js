import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import contact from '../../../public/contact.png'
import hero from '../../../public/hero.png'

const blogs = [
  {
    img: contact,
    title: "Anderson",
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: "error",
  },
  {
    img: hero,
    title: "James",
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: "warning",
  },
  {
    img: contact,
    title: "Dummy text",
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    btncolor: "primary",
  },
];

const BlogCard = () => {
  return (
    <Grid container>
      {blogs.map((blog, index) => (
        <Grid
          key={index}
          item
          xs={12}
          lg={4}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <Card
            sx={{
              p: 0,
              width: "100%",
            }}
          >
            <Image height={150} width={300} src={blog.img} alt="img" />
            <CardContent
              sx={{
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "h4.fontSize",
                  fontWeight: "500",
                }}
              >
                {blog.title}
              </Typography>
              <Typography
                color="textSecondary"
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  mt: 1,
                }}
              >
                {blog.subtitle}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: "15px",
                }}
                color={blog.btncolor}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogCard;
