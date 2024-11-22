import {InputGroup, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect} from 'react';

const SearchInput= (props)=>{

const[Searchterm, setSearchterm] = useState("");
const[SubmitOrNot, setSubmitOrNot] = useState(false);

const submitHandler =()=> {
    setSubmitOrNot(!SubmitOrNot);
    props.onSearch(Searchterm);
}


return (
    <InputGroup className="mt-3 mb-3">
        <Form.Control
          placeholder="Search..."
          onChange={e => setSearchterm(e.target.value)} 
          value = {Searchterm}/>
          <Button variant="primary" type="button" onClick ={()=>submitHandler()}> Search </Button>
      </InputGroup>
      

);
};

export default SearchInput;
