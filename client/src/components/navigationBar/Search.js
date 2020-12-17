import React,{useEffect,useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function Asynchronous() {

const [display, setDisplay] = useState(false);
const [options, setOptions]= useState([]);
const [search, setSearch] = useState("");


useEffect(()=>{
  const datas = [];
  (async function() {
    const response = await fetch("/api/users/all");
    if(response.ok) {
      const data = await response.json();
      datas.push(...data)
    }
  }())
  setOptions(datas)
},[])
}