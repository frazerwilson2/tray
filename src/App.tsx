import React from 'react';
import { useSelector } from 'react-redux'
import {getActiveTab} from './store';
import {User, Privacy, Done} from './constants';
import './App.css';
import Menu from './components/menu';
import UserPage from './pages/UserPage';
import PrivacyPage from './pages/PrivacyPage';
import DonePage from './pages/DonePage';

function App() {
  const activeTab = useSelector(getActiveTab);

  // Define pages and components
  const pagesConfig = [
    {
      title: User,
      component: () => <UserPage nextStep={Privacy} />
    },
    {
      title: Privacy,
      component: () => <PrivacyPage nextStep={Done} />
    },
    {
      title: Done,
      component: () => <DonePage lastPage />
    }
  ];

  // determine which tab to show
  const SelectedActiveTab = Object.values(pagesConfig).find(page => page.title == activeTab);
  
  return (
    <div className="container">
      <Menu config={pagesConfig} active={SelectedActiveTab?.title} />
      {SelectedActiveTab && <SelectedActiveTab.component />}
    </div>
  );
}

export default App;
