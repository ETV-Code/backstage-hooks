
import React from 'react';
import {Button, Card, CardContent, Grid, Link, Typography} from "@material-ui/core";
import FilterDramaIcon from "@material-ui/icons/FilterDrama";

type Props = {
  styleCard?: React.CSSProperties;
  title: string;
  version: string;
  hrefVersion: string;
  hrefButton: string;

};
export const ArchitectureCard = ({styleCard,title,version,hrefVersion,hrefButton}: Props) => {
  return (
      <Card style={styleCard} >
        <CardContent>

          <Grid  container  spacing={3} alignItems="center">

            <Grid item xs={1} >
              <Grid container justifyContent="center" >
                <FilterDramaIcon fontSize="large"  />
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h6">
                {title}
              </Typography>
              <Typography paragraph>
                {version}
              </Typography>
              <Typography paragraph>
                <Link href={hrefVersion}>
                  Versiones anteriores
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Grid container  direction="row" justifyContent="flex-end" >
                <a href={hrefButton} target="_blank">
                  <Button variant="contained" >Select</Button>
                </a>

              </Grid>

            </Grid>
          </Grid>

        </CardContent>
      </Card>
  );
};