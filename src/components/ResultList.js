import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { InputContext } from '../App';
import { useContext } from 'react';
import MeaningList from './MeaningList';
import Example from './Example';
import Synonyms from './Synonyms';
import Antonyms from './Antonyms';

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

const ResultList = () => {
    const { inputValue } = useContext(InputContext);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async (param) => {
        try {
            setLoading(true);
            const res = await axios(`${param}`);
            setResponse(res.data);
            setError(null);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (inputValue.length) {
            fetchData(inputValue);
        }
    }, [inputValue]);

    if (loading) {
        return <h1 className='text-center mt-10 font-semibold text-black'>Loading...</h1>
    }
    if (error) {
        return <h3 className='text-center mt-10 font-semibold text-gray-500'>No definitions found!</h3>
    }


  return (
    <div className="container mx-auto p-4 max-w-2xl">
        { response && (
            <div>
                <h3 className='text-xl font-bold mt-4'>Meaning & Definitions : </h3>
                <MeaningList mean={response}/>
                <h3 className='text-xl font-bold mt-4'>Example : </h3>
                <Example mean={response}/>
                <h3 className='text-xl font-bold mt-4'>Synonym : </h3>
                <Synonyms mean={response}/>
                <h3 className='text-xl font-bold mt-4'>Antonym : </h3>
                <Antonyms mean={response}/>
            </div>
        ) }
    </div>
  );
};

export default ResultList;

