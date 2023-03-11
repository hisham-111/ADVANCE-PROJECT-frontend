import React from 'react'
import { Route, Routes} from 'react-router-dom';

import Home from '../../pages/home/home'
import Profile from '../../pages/profile/profile';
import Trans from '../../pages/transaction/transaction';
import Admins from '../../pages/admins/admins';
import Help from '../../pages/help/help';
import Signin from '../../pages/signin/signin';
import Dashboard from '../../pages/dashboard/dashboard'
import Changepass from '../../pages/changepass/changepass';
import Statistics from '../../pages/statistics/statistics'
import { BrowserRouter } from 'react-router-dom';
export default function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/changepass" element={<Changepass />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transactions" element={<Trans />} />
          <Route path="/help" element={<Help />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
