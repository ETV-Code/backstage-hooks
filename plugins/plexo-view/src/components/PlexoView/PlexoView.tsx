import React from 'react';
import { TabbedLayout, Header, HeaderLabel, Page } from '@backstage/core-components';
import {ArchitecturesTab} from "../ArchitecturesTab/ArchitecturesTab";
import {ApplicactionsTab,} from "../ApplicationsTab/ApplicactionsTab";
import {HomeTab} from "../HomeTab/HomeTab";
import {DashboardsTab} from "../DashboardsTab/DashboardsTab";

export const PlexoView = () => {
  return (
      <Page themeId="tool">
        <Header title="Plexo">
          <HeaderLabel label="Owner" value="CBO" />
        </Header>
        <TabbedLayout>
          <TabbedLayout.Route path="/home" title="Home">
            <HomeTab/>
          </TabbedLayout.Route>
          <TabbedLayout.Route path="/architectures" title="Architectures">
            <ArchitecturesTab/>
          </TabbedLayout.Route>
          <TabbedLayout.Route path="/applications" title="Applications">
            <ApplicactionsTab/>
          </TabbedLayout.Route>
          <TabbedLayout.Route path="/dashboars" title="Dashboards">
            <DashboardsTab/>
          </TabbedLayout.Route>
        </TabbedLayout>
      </Page>
  );
}