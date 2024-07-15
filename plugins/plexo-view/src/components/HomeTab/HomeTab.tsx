import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Link } from "@material-ui/core";

export const HomeTab = () => {

  return (
    <section>
      <Card>
        <CardContent>

          <Typography variant="h4">
            Autonomy and Self-Service for Cloud
          </Typography>

          <Typography paragraph>
            PleXo is a new way to do your deployments; generating more speed in the environments and simplifying the deployment process of the infrastructure.
          </Typography>

          <Typography paragraph>
            The services you will find:
          </Typography>

          <Typography variant="body1">
            <Link href="/plexo-view/architectures">
              <b>Architectures: </b>
            </Link>
             Architectures available in the organization such as:
            <List>
              <ListItem>Cloud Native</ListItem>
              <ListItem>Traditional to neon</ListItem>
              <ListItem>Static website</ListItem>
              <ListItem>Traditional to euc</ListItem>
              <ListItem>Additional complementary services</ListItem>
            </List>
          </Typography>

          <Typography variant="body1">
            <Link href="/plexo-view/applications">
              <b>Applications: </b>
            </Link>
             Applications deployed in the organization
          </Typography>

        </CardContent>
      </Card>
    </section>
  );
};
