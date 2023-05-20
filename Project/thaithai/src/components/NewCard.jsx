import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";

export default function NewCard() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "40px"
      }}
    >
      {/* card1 */}
      <Card
        style={{
          maxWidth: 345,
          marginLeft: "40px",
          marginTop: "20px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            src="https://image.makewebeasy.net/makeweb/m_1920x0/n69uLezaT/Product/9.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* card2 */}
      <Card
        style={{
          maxWidth: 345,
          marginLeft: "40px",
          marginTop: "20px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            src="https://image.makewebeasy.net/makeweb/m_1920x0/n69uLezaT/Product/9.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* card3 */}
      <Card
        style={{
          maxWidth: 345,
          marginLeft: "40px",
          marginTop: "20px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            src="https://image.makewebeasy.net/makeweb/m_1920x0/n69uLezaT/Product/9.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* card4 */}
      <Card
        style={{
          maxWidth: 345,
          marginLeft: "40px",
          marginTop: "20px",
          marginRight: "40px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            src="https://image.makewebeasy.net/makeweb/m_1920x0/n69uLezaT/Product/9.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
