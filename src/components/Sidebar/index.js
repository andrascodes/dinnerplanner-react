import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import RemoveIcon from 'material-ui/svg-icons/content/remove';
import IconButton from 'material-ui/IconButton';
import HighlightOffIcon from 'material-ui/svg-icons/action/highlight-off';

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

import ROUTES from '../../utils/routes';
import trimNumber from '../../utils/trimNumber';

const alignRight = {'textAlign': 'right' };

const Sidebar = ({
  numberOfGuests,
  menu,
  onNumberOfGuestsChange,
  onNumberOfGuestsIncrease,
  onNumberOfGuestsDecrease,
  onDeleteMenuItemClick
}) => {
  return (
    <div className="Sidebar">
      
      <AppBar 
        title="My Dinner"
        showMenuIconButton={false}
      />

      <div className="GuestInput">
        
        <FloatingActionButton 
          mini={true}
          onClick={onNumberOfGuestsIncrease}
          className="GuestInputButton"
        >
          <AddIcon />
        </FloatingActionButton>
        
        <TextField
          type="text"
          value={numberOfGuests}
          floatingLabelText="Guest number"
          onChange={onNumberOfGuestsChange}
          className="GuestInputField"
        />
        
        <FloatingActionButton 
          mini={true}
          onClick={onNumberOfGuestsDecrease}
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
            {
              menu.map(dish => (
                <TableRow key={`menu-${dish.id}`} className="SidebarMenuItemRow">
                  <TableRowColumn className="SidebarMenuDishNameColumn">
                    <IconButton className="DeleteMenuItemButton" onClick={onDeleteMenuItemClick(dish.id)}>
                      <HighlightOffIcon/>
                    </IconButton>
                    {dish.name}
                  </TableRowColumn>
                  <TableRowColumn style={alignRight}>
                    {trimNumber(numberOfGuests * dish.price, 2)}
                  </TableRowColumn>
                </TableRow>
              ))
            }
          </TableBody>

          <TableFooter adjustForCheckbox={false}>
            <TableRow>
              <TableRowColumn style={alignRight}>Total Cost:</TableRowColumn>
              <TableRowColumn style={alignRight}>
                {trimNumber(
                  menu.reduce((acc, curr) => acc += numberOfGuests * curr.price, 0), 2
                )}
              </TableRowColumn>
            </TableRow>
          </TableFooter>

        </Table>
      </div>
  
      <div className="ConfirmButtonContainer">
        <Link to={ROUTES.total}>
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
