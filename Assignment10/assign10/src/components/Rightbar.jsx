import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function Rightbar() {
  return (
    <Box direction={"column"} sx={{ display: { xs: "none", md: "block" } }}>
      <Box display={"flex"} flexDirection={"column"} mt={2} >
        <Typography>Lastest Photos</Typography>
        <ImageList sx={{ width: 250, height: 250 }} cols={2}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=250&h=250&fit=crop&auto=format`}
                srcSet={`${item.img}?w=250&h=250&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

const itemData = [
  {
    img: "https://static01.nyt.com/images/2022/03/30/arts/28billboard-item/28billboard-item-mediumSquareAt3X.jpg",
    title: "404 not found",
  },
  {
    img: "https://img.imageimg.net/upload/portal/file/img/NCT210629.jpg",
    title: "404 not found",
  },
  {
    img: "https://kpopmerchandiseguide.com/image/nct-127-regular-repackage-album-cover.jpg",
    title: "404 not found",
  },
  {
    img: "https://image.kpopmap.com/2021/10/NMIXX-091322.jpg",
    title: "404 not found",
  },
];
export default Rightbar;
