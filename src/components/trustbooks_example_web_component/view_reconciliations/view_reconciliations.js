'use strict'

import React from 'react'
import { Link } from "react-router-dom"
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import PictureAsPdf from '@material-ui/icons/PictureAsPdf'

import useFetch from '../../../hooks/use_fetch'


const ViewReconciliations = function(props) {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts') // Just pulling some dummy data to demonstrate an ajax request

  // We don't have data yet, so we'll render a placeholder
  if (loading) {
    return (
      <div>
          <div>Loading data from API...</div>
      </div>
    )
  }

  return (
    <div>
      <h1 style={{ color: "#90c27a", fontFamily: "verdana,sans-serif", fontSize: "150%" }}>VIEW RECONCILIATIONS</h1>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell><strong>Bank Account Name</strong></TableCell>
              <TableCell><strong>Account Type</strong></TableCell>
              <TableCell><strong>Detailed Reconciliation</strong></TableCell>
              <TableCell><strong>Three Way Reconciliation</strong></TableCell>
              <TableCell><strong>Bank Statement</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Preparer</strong></TableCell>
              <TableCell><strong>Reviewer</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data_item) => (
              <TableRow
                key={data_item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row"><Link to={`/PerformReconciliation/${data_item.id}`} key={data_item.id}>01/{Math.min(data_item.id, 30)}/2022</Link></TableCell>
                <TableCell><Link to={`/PerformReconciliation/${data_item.id}`} key={data_item.id}>{data_item.title.substring(1, 20)}</Link></TableCell>
                <TableCell>Trust</TableCell>
                <TableCell><PictureAsPdf fontSize="inherit" style={{ fontSize: "30px" }} /></TableCell>
                <TableCell><PictureAsPdf fontSize="inherit" style={{ fontSize: "30px" }} /></TableCell>
                <TableCell><PictureAsPdf fontSize="inherit" style={{ fontSize: "30px" }} /></TableCell>
                <TableCell style={{ color: "green" }}>Reconciled</TableCell>
                <TableCell>Tom Boyle</TableCell>
                <TableCell>Chad Todd</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ViewReconciliations
