import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Asynchronous() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const [selected, setSelected] = useState("")
  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch('/api/search/users');
      // await sleep(1e3); // For demo purposes.
      const data = await response.json();
      if (active) {
        setOptions(data);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
        <Autocomplete
      id="search location and profile"
      style={{ width: 500 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => {
        if(option.firstName){
         return option.firstName === value.firstName
        }else {
         return option.name === value.name
        }

        }}
      getOptionLabel={(option) =>{
        if(option.firstName){
           return `${option.firstName} ${option.lastName}`
        }else {
          return `${option.name}`
        }
       }}

      options={options}
      loading={loading}
      // onChange={(event, newValue)=>window.location.href=`/profile/${newValue.id}`}
      // onChange={(event, newValue)=>console.log(options)}
       onChange={
        (event, newValue)=>{
          if (newValue.firstName){
            return window.location.href=`/profile/${newValue.id}`
          } else {
            return window.location.href=`/place/${newValue.id}`
          }
        }
       }
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={(option) => {
        if (option.firstName){

     
        return  <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Avatar
         src={option.Photos[0].url}
          >
          </Avatar>
          <Typography>
            {option.firstName} {option.lastName}
          </Typography>
          </div>   }else {
            return  <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Avatar
           src={option.Photos[0].url}
            >
            </Avatar>
            <Typography>
              {option.name}
            </Typography>
            </div>
          }
        
      }}
    />
  );
}