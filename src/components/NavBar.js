import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DataFace from './DataFace';
import AddForm from './AddForm';
import AnalyticsView from './AnalyticsView';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import DataFaceDynamic from './DataFaceDynamic';
import SearchedData from './SearchedData';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 10,
    marginTop: 8,
    // width: '200px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '18ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [searchTerm, setSearchTerm] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [rows, setRows] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleSearch(event) {
    setSearchTerm(parseInt(event.target.value)); // Update the search term state
    searchRows() 
  }
  
  function searchRows() {
    // const result = rows.filter(entry => Object.values(entry).some(val => typeof val === Number && val.includes(searchTerm)));
    const result = rows.find(row => row.CustomerOrderID === searchTerm); // Search for the row with the given CustomerOrderID
    setSearchResults([result]); // Update the search result state
  }
  console.log(searchResults)
  console.log(searchTerm)

  useEffect(() => {

    fetch('http://localhost:8080/h2h_milestone_3/ReadServlet')
        .then((response) => response.json())
        .then((json) => {
            // Modify the rows array to include 'id' field by incrementing and mapping with 'customer_id'
            const modifiedData = json.map((row, index) => ({
                ...row,
                id: index + 1, // Incrementing the index to create the 'id' value
            }));
            setRows(modifiedData.slice(0,20));

        })
        .catch((error) => console.log(error));
    console.log(rows)
}, []);


  return (
    <div className={classes.root} >
      <AppBar position="static" style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", flexWrap: 'wrap' }}>
        <div className="menu">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" >
            <Tab label="HOME PAGE" {...a11yProps(0)} />
            <Tab label="ADD DATA" {...a11yProps(1)} />
            <Tab label="ANALYTICS VIEW" {...a11yProps(2)} />
            { searchResults.length == 0 ? "" : <Tab label="Searched Data" {...a11yProps(3)} />}
           
          </Tabs>
        </div>
        <div className="menu" style={{ display: 'flex', alignItems: "baseline" }}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Customer ID"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearch}
              onEnter
            />
          </div>
          <div>
            <Button variant="contained" style={{
              width: '220px',
              height: '35px',
              margin: '4px 6px 5px 4px',
            }}>ADVANCED SEARCH</Button>
          </div>
        </div>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DataFaceDynamic />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AnalyticsView />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SearchedData searchResults={searchResults}/>
      </TabPanel>
    </div>
  );
}


