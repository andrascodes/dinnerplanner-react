import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import RemoveIcon from 'material-ui/svg-icons/content/remove';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import './Sidebar.css';

const alignRight = {'textAlign': 'right' };

const Sidebar = props => {
  return (
    <div className="Sidebar">
      
      <AppBar 
        title="My Dinner"
      />

      <div className="GuestInput">
        
        <FloatingActionButton 
          mini={true}
          onClick={props.onNumberOfGuestsIncrease}
          className="GuestInputButton"
        >
          <AddIcon />
        </FloatingActionButton>
        
        <TextField
          type="text"
          value={props.numberOfGuests}
          floatingLabelText="Guest number"
          onChange={props.onNumberOfGuestsChange}
          className="GuestInputField"
        />
        
        <FloatingActionButton 
          mini={true}
          onClick={props.onNumberOfGuestsDecrease}
          className="GuestInputButton"
        >
          <RemoveIcon />
        </FloatingActionButton>

      </div>

      <div className="MenuTable">
        <Table
          fixedHeader={true}
          fixedFooter={true}
          selectable={false}
          multiSelectable={false}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>Dish</TableHeaderColumn>
              <TableHeaderColumn style={alignRight}>
                Cost
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody
            displayRowCheckbox={false}
          >
            <TableRow>
              <TableRowColumn>Apple Pie</TableRowColumn>
              <TableRowColumn style={alignRight}>
                79.05
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
  
      <div className="ConfirmButtonContainer">
        <Link to="/total">
          <RaisedButton 
            label="Confirm Dinner" 
            primary={true}
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
