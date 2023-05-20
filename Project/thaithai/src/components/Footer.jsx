import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function Footer() {
  return (
    <Box
      position="absolute"
      // bottom="0px"
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "black",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          ml="1%"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Typography
              color="white"
              variant="h6"
              fontWeight="bold"
              mt="20px"
              mb="15px"
            >
              Contact us
            </Typography>
            <Typography color="white">Email: ThaithaiOtop@gmail.com</Typography>
            <Typography color="white">Telephone: 02-345-6789</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              color="white"
              variant="h6"
              fontWeight="bold"
              mt="20px"
              mb="15px"
            >
              Follow us
            </Typography>
            <IconButton>
              <InstagramIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <TwitterIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <FacebookIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <AlternateEmailIcon style={{ color: "white" }} />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <Typography
              color="white"
              variant="h6"
              fontWeight="bold"
              mt="20px"
              mb="15px"
            >
              Address
            </Typography>
            <Typography color="white">
              126 Pracha Uthit Rd, Bang Mot, Thung Khru, Bangkok 10140
            </Typography>
          </Grid>
        </Grid>

        <Typography
          color="white"
          display="flex"
          justifyContent="center"
          mt="60px"
        >
          © 2023 Thai ไทย. All Rights Reserved.
        </Typography>

      </Container>
    </Box>
  );
}
