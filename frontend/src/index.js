import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import 'antd/dist/antd.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import MigrationsPage from './pages/MigrationsPage';
import ResearchersPage from './pages/ResearchersPage';
import BioEntitiesSearcherPage from './pages/BioEntitiesSearcherPage';
import PublicationsPage from './pages/PublicationsPage';
import InstitutionsPage from './pages/InstitutionsPage';
import CountriesPage from './pages/CountriesPage';
import TwoCountriesPage from './pages/TwoCountriesPage';
import VisualizationPage from './pages/VisualizationPage';

import { ProSidebarProvider } from 'react-pro-sidebar';


ReactDOM.render(
  <ProSidebarProvider>
  <div>
    <Router>
      <Switch>
        <Route exact
          path="/"
          render={() => (
            <MigrationsPage />
          )} />
        <Route exact
          path="/signup"
          render={() => (
            <SignupPage />
          )} />
        <Route exact
          path="/login"
          render={() => (
            <LoginPage />
          )} />
        <Route exact
          path="/migrations"
          render={() => (
            <MigrationsPage />
          )} />
        <Route exact
          path="/researchers"
          render={() => (
            <ResearchersPage />
          )} />
        <Route exact
          path="/bioentities"
          render={() => (
            <BioEntitiesSearcherPage />
          )} />
        <Route exact
          path="/publications"
          render={() => (
            <PublicationsPage />
          )} />
        <Route exact
          path="/institutions"
          render={() => (
            <InstitutionsPage />
          )} />
        <Route exact
          path="/countries"
          render={() => (
            <CountriesPage />
          )} />
        <Route exact
          path="/twocountries"
          render={() => (
            <TwoCountriesPage />
          )} />
    <Route exact
			path="/visualization"
			render={() => (
				<VisualizationPage />
			)}/>
      </Switch>
    </Router>


  </div>
  </ProSidebarProvider>,
  document.getElementById('root')
);

