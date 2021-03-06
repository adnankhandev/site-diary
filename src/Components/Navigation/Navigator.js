/* Core */
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

/*Screens*/
import WeatherScreen from '../../Screens/Weather';
import WelcomeScreen from '../../Screens/Welcome';

import VisitorsAndOperativesScreen from '../../Screens/VisitorsAndOperatives/VisitorsAndOperatives';
import VisitorsToSite from '../../Screens/VisitorsAndOperatives/VisitorsToSite';
import OperativesToSite from '../../Screens/VisitorsAndOperatives/OperativesToSite';
import ManagementTeamScreen from '../../Screens/VisitorsAndOperatives/ManagementTeam';
import PlantOnSite from '../../Screens/VisitorsAndOperatives/PlantOnSite';

import AccidentsAndIssuesScreen from '../../Screens/AccidentsAndIssues/AccidentsAndIssues';
import Accidents from '../../Screens/AccidentsAndIssues/Accidents';
import Issues from '../../Screens/AccidentsAndIssues/Issues';
import MaterialIssues from '../../Screens/AccidentsAndIssues/MaterialIssues';

import ReportScreen from '../../Screens/Report';
import IssuePictures from '../../Screens/IssuePictures';



const AppStackNavigator = createStackNavigator({
  //Remove this line && uncomment on line 32 for normal app flow
  // OperativesToSite: OperativesToSite,
  // Management: ManagementTeamScreen,
  // PlantOnSite: PlantOnSite,
  IssuePictures: IssuePictures,

  /*-------------------------------------------------------------*/

  Welcome: WelcomeScreen,
  Weather: WeatherScreen,

  VisitorsAndOperatives: VisitorsAndOperativesScreen,
  VisitorsToSite: VisitorsToSite,
  OperativesToSite: OperativesToSite,
  Management: ManagementTeamScreen,
  PlantOnSite: PlantOnSite,

  AccidentsAndIssues: AccidentsAndIssuesScreen,
  Accidents: Accidents,  
  Issues: Issues,
  MaterialIssues: MaterialIssues,

  GenerateReport: ReportScreen,

  // IssuePictures: IssuePictures,
})


export default AppStackNavigator;