'use strict'

import React, { useState, useEffect } from 'react'
import { HashRouter, Link, Routes, Route } from "react-router-dom"
import { Button } from '@material-ui/core'
import LoginIcon from '@material-ui/icons/AccountCircle'

import ViewReconciliations from './view_reconciliations/view_reconciliations'
import PerformReconciliation from './perform_reconciliation/perform_reconciliation'


const TrustbooksExampleWebComponent = function(props) {

  return(
    <div style={{ padding: "20px" }}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<ViewReconciliations />} />
          <Route path="/PerformReconciliation/:reconciliation_id" element={<PerformReconciliation />} />
        </Routes>
      </HashRouter>
    </div>
  )

}

export default TrustbooksExampleWebComponent
