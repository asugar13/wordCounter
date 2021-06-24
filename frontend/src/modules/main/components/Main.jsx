import React, { useEffect, useState } from 'react';
import InputUrl from "./InputUrl"
import { Spinner } from "react-bootstrap";
import "./Main.css"
import NotificationManager from "react-notifications/lib/NotificationManager"
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query'
import _ from "underscore"
import { CustomColumnMenu } from "./CustomColumnMenu"

export default ({
    wordsLoading,
    getWords,
    urlHistory,
    wordCounts
}) => {
    const [selectedUrl, setSelectedUrl] = useState(null)
    const [wordCountMappings, setWordCountMappings] = useState(null)
    // const [wordsLoading, setWordsLoading] = useState(false)
    // const [urlHistory, setUrlHistory] = useState([])
    // const [wordCounts, setWordCounts] = useState([])


    const columns = [{
        title: "Word",
        field: "word",
        show: true
    },
    {
        title: "Count",
        field: "count",
        show: true
    }]

    let arg = {
        skip: 0,
        take: 25,
        sort: [
            { field: 'count', dir: 'desc' }
        ],
    }
    const [dataState, setDataState] = useState(arg)
    const [dataResult, setDataResult] = useState(null)

    // const getWords = () => {
    //     const url = "http://localhost:3000/main/word-count"
    //     let data = {
    //         request: selectedUrl,
    //     };
    //     const otherParam = {
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data),
    //         method: "POST"
    //     };
    //     let status
    //     setWordsLoading(true)
    //     fetch(url, otherParam)
    //         .then(response => {
    //             status = response.status
    //             setWordsLoading(false)
    //             return response.json()
    //         })
    //         .then(ans => {
    //             if (status !== 200) {
    //                 setWordCounts([])
    //                 return NotificationManager.error("No Response")
    //             }
    //             let requestOption = { value: selectedUrl, label: selectedUrl }
    //             let labels = _.pluck(urlHistory, "label")
    //             if (labels.indexOf(selectedUrl) !== -1) {
    //                 let newHistory = urlHistory
    //                 newHistory.splice(labels.indexOf(selectedUrl), 1)
    //                 setUrlHistory([...newHistory, requestOption])
    //             } else {
    //                 setUrlHistory(history => [...history, requestOption])
    //             }
    //             return setWordCounts(ans)
    //         })
    //         .catch(e => {
    //             setWordsLoading(false)
    //             console.log(e)
    //         });
    // }

    useEffect(() => {
        if (selectedUrl) {
            getWords(selectedUrl)
            // getWords()
        }
    }, [selectedUrl])

    useEffect(() => {
        let formattedWordCounts = Object.keys(wordCounts).map(word => {
            return {
                count: wordCounts[word],
                word: word
            }
        })
        setWordCountMappings(formattedWordCounts)
        setDataResult(process(formattedWordCounts, dataState))

    }, [wordCounts])

    const dataStateChange = (event) => {
        setDataResult(process(wordCountMappings, event.dataState))
        setDataState(event.dataState)
    }

    return <>
        <h3 className="title">Enter a URL to find out how many times each word appears in its content</h3>
        <InputUrl urlHistory={urlHistory} setSelectedUrl={setSelectedUrl} />

        <div className="table">
            {
                wordsLoading ?
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner> :
                    <Grid
                        style={{ height: '700px' }}
                        sortable
                        pageable={{ buttonCount: 4, pageSizes: true }}
                        data={dataResult}
                        {...dataState}
                        onDataStateChange={(event) => dataStateChange(event)}
                    >
                        {_.map(columns, (column, index) => {

                            return (
                                <GridColumn
                                    key={index}
                                    field={column.field}
                                    title={column.title}
                                    columnMenu={
                                        props =>
                                            <CustomColumnMenu
                                                {...props}
                                                columns={columns}
                                            />
                                    }
                                />
                            )
                        })}
                    </Grid>
            }
        </div>
    </>
}
