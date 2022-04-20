'use strict'

import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'

import useFetch from '../../../hooks/use_fetch'


const PerformReconciliation = function() {
  let params = useParams()
  const { data, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.reconciliation_id}/comments`) // Just pulling some dummy data to demonstrate an ajax request

  // We don't have data yet, so we'll render a placeholder
  if (loading) {
    return (
      <div>
          <div>Loading data from API...</div>
      </div>
    )
  }

  // We hava data, lets display it
  return(
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, border: "0px solid blue" }}>
        <h1 style={{ color: "#90c27a", fontFamily: "verdana,sans-serif", fontSize: "150%" }}>PERFORM RECONCILIATION</h1>
        <TableContainer component={Paper}>
          {/* <Table sx={{ minWidth: 6 }} size="small" aria-label="a dense table"> */}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell><strong>Txn #</strong></TableCell>
                <TableCell><strong>Payment ID</strong></TableCell>
                <TableCell><strong>Type</strong></TableCell>
                <TableCell><strong>Contact</strong></TableCell>
                <TableCell><strong>Matter</strong></TableCell>
                <TableCell><strong>Payee</strong></TableCell>
                <TableCell><strong>Amount</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((data_item) => (
                <TableRow
                  key={data_item.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">01/{Math.min(data_item.id, 30)}/2022</TableCell>
                  <TableCell>{data_item.id}</TableCell>
                  <TableCell>p-{data_item.id}{data_item.id}</TableCell>
                  <TableCell>Charge</TableCell>
                  <TableCell>{data_item.email}</TableCell>
                  <TableCell>Dummy Matter</TableCell>
                  <TableCell>Tom Boyle</TableCell>
                  <TableCell>${data_item.id}.00</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div style={{ flex: "0 0 380px", padding: "20px", border: "0px solid green" }}>
        <p>Reconciliation Summary: ${params.reconciliation_id}.00</p>
        <p>Beginning Bank Statement Balance: ${params.reconciliation_id}.00</p>
        <p>Cleared Total Disbursements: ${params.reconciliation_id}.00</p>
        <p style={{ borderBottom: "1px solid blue", paddingBottom: "5px" }}>Cleared Total Deposits: ${params.reconciliation_id}.00</p>
        <p>Cleared Balance: ${params.reconciliation_id}.00</p>
        <p style={{ borderBottom: "1px solid blue", paddingBottom: "5px" }}>Ending Bank Statement Balance: ${params.reconciliation_id}.00</p>
        <p>Difference: ${params.reconciliation_id}.00</p>
        <Button style={{ marginRight: "10px" }} component={Link} to="/" size="small" color="primary" variant="contained">Cancel</Button>
        <Button component={Link} to="/" size="small" variant="outlined">Save For Later</Button>
        <Button style={{ marginLeft: "5px" }} component={Link} to="/" size="small" variant="contained">Save And Finalize</Button>
      </div>

    </div>
  )
}

export default PerformReconciliation