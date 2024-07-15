import React from 'react';
import { Card, CardContent, Grid } from '@material-ui/core';
import {SearchBard} from "../SearchBar/SearchBard";
import ApplicationsTable from "./components/ApplicationsTable";


export const ApplicactionsTab = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={6}>
              <h2>Aplicaciones desplegadas</h2>
              <p>Acá te presentamos un listado de nuestras Arquitecturas de Referencia disponibles para desplegar tu
                aplicación</p>
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