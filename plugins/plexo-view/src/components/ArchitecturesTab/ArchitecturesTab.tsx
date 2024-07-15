import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import {ArchitectureCard} from "./components/ArchitectureCard";



export const ArchitecturesTab = () => {
  return (
    <>
      <Card>
        <CardContent>

          <Typography variant="h4">
            !Bienvenido a PleXo, comencemos!
          </Typography>

          <Typography paragraph>
            Realice una busqueda para mostrar resultados
          </Typography>

        </CardContent>
      </Card>
     {/* <Card style={{marginTop: 15}}>*/}
        <CardContent>

          <ArchitectureCard
            title="Cloud Native"
            version="v1.0"
            hrefVersion="/plexo-view/architectures"
            hrefButton="https://plexo.apps.bancolombia.com/nueva-arquitectura/01J2HKQ7HYJKC6JDG7BA4RB1E0"
          />
          <ArchitectureCard
            styleCard={{marginTop: 10}}
            title="Traditional to neon"
            version="v1.0"
            hrefVersion="/plexo-view/architectures"
            hrefButton="https://plexo.apps.bancolombia.com/nueva-arquitectura/01J2HKQ7HYJKC6JDG7BA4RB1E0"
          />

          <ArchitectureCard
            styleCard={{marginTop: 10}}
            title="Static website"
            version="v1.0"
            hrefVersion="/plexo-view/architectures"
            hrefButton="https://plexo.apps.bancolombia.com/nueva-arquitectura/01J2HKQ7HYJKC6JDG7BA4RB1E0"
          />

          <ArchitectureCard
            styleCard={{marginTop: 10}}
            title="Traditional to euc"
            version="v1.0"
            hrefVersion="/plexo-view/architectures"
            hrefButton="https://plexo.apps.bancolombia.com/nueva-arquitectura/01J2HKQ7HYJKC6JDG7BA4RB1E0"
          />

          <ArchitectureCard
            styleCard={{marginTop: 10}}
            title="Additional complementary services"
            version="v1.0"
            hrefVersion="/plexo-view/architectures"
            hrefButton="https://plexo.apps.bancolombia.com/nueva-arquitectura/01J2HKQ7HYJKC6JDG7BA4RB1E0"
          />


        </CardContent>
      {/*</Card>*/}
    </>
  );
};