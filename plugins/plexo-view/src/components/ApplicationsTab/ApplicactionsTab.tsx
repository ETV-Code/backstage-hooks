import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import {SearchBard} from "../SearchBar/SearchBard";
import ApplicationsTable from "./components/ApplicationsTable";


export const ApplicactionsTab = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={6}>
              <Typography variant="h4">
                Applications deployed
              </Typography>
              <Typography paragraph>
                Here you could find a list of our Reference Architectures available to deploy your application
              </Typography>
            </Grid>

            <Grid item xs={1} />

            <Grid item xs={4}>
              <SearchBard/>
            </Grid>
          </Grid>


        </CardContent>
      </Card>
          <ApplicationsTable style={{marginTop:"15px"}}/>

    </div>
  );
};