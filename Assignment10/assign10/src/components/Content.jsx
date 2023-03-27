import { CardMedia, Typography, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Card } from "@mui/material";
import { Grid } from "@mui/material";

export const Content = () => {
  return (
    <>
    <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        paddingTop={2}
    >
        <Grid item  >
            <Box>
                <Typography variant="h4" sx={{ marginBottom: 1 }}>
                    Welcome to My Website
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                K-pop is a cultural product that features "values, identity and
            meanings that go beyond their strictly commercial value." It is
            characterized by a mixture of modern Western sounds and
            African-American influences (including sounds from Hip-hop, R&B,
            Jazz, black pop, soul, funk, techno, disco, house, and Afrobeats)
            with a Korean aspect of performance
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                The first known use of the term K-pop occurred on Billboard in the
            October 9, 1999 edition at the end of an article titled "S. Korea To
            Allow Some Japanese Live Acts" by Cho Hyun-jin, then a Korea
            correspondent for the magazine, which used it as a broad term for
            South Korean pop music. Cho himself, however, is not sure if he
            coined the term, since some articles stated that the word 'K-pop'
            was already being used by music industry insiders, even though he
            had never heard it personally.
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://www.envimedia.co/wp-content/uploads/2022/02/itzy-evolution-thumbnail-2-1024x576.jpg"
                alt="view image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Itzy
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Itzy is a South Korean girl group formed by JYP Entertainment
                and consisting of members Yeji, Lia, Ryujin, Chaeryeong, and
                Yuna.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://images.workpointnews.com/workpointnews/2022/06/10001226/1654794744_52479_2222222222222222222222.jpg"
                alt="black image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Aespa
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Aespa is a South Korean girl group formed by SM Entertainment
                and consisting of four members: Karina, Giselle, Winter, and
                Ningning.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://s.isanook.com/jo/0/ui/491/2455497/newjeans-omg.jpg"
                alt="colorful image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Newjeans
                </Typography>
                <Typography variant="body2" color="text.secondary">
                NewJeans is a South Korean girl group formed by ADOR. The group
                is composed of five members: Minji, Hanni, Danielle, Haerin, and
                Hyein.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
};
