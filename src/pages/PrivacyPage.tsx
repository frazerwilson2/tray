import React from 'react';
import Page from '../components/page';
import Checkbox from '../components/checkbox';
import {setReceiveUpdates, receiveUpdates, receiveOtherUpdates, setReceiveOtherUpdates} from '../constants'

const PrivacyPage = (props:any) => (
  <Page {...props}>
    
    <Checkbox value={receiveUpdates} changeAction={setReceiveUpdates}
      label="Receive updates about Tray.io products by email"
    />

    <Checkbox value={receiveOtherUpdates} changeAction={setReceiveOtherUpdates}
      label="Receive updates about Tray.io products by email"
    />

  </Page>
)

export default PrivacyPage;