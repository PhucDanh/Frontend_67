import React, { Fragment, useEffect, useState, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux"
import "./index.css";
import Controls from "../../components/Control";
import Main from "../../components/Main";
import axios from "axios";

const Game = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const dispatch = useDispatch();

  const fetchNewDeck  = useCallback(() => {
    axios({
      method: "GET",
      url: "https://deckofcardsapi.com/api/deck/new/",
    }).then((res) => {
      // console.log("res",res.data);
      dispatch({
        type: "SET_DECK_CARD",
        payload: res.data,
      })
      localStorage.setItem("deck_id", res.data.deck_id);
    }).catch((err) => {
      console.log("err",err);
    });
  }, [dispatch]); 

  const shuffleDeck = useCallback((deckId) => {
    axios({
      method: "GET",
      url: `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`,
    }).then((res) => {
      // console.log("res",res.data);
      dispatch({
        type: "SET_DECK_CARD",
        payload: res.data,
      })
      localStorage.setItem("deck_id", res.data.deck_id);
    }).catch((err) => {
      console.log("err",err);
    });
  }, [dispatch])

  // DidMount, DidUpdate, WillUnmount
  useEffect(() => {
    console.log("Use Effect run, Did Mount");
    const deckId = localStorage.getItem("deck_id");
    if(deckId) {
      shuffleDeck(deckId);
    } else {
      fetchNewDeck();
    }
  }, []);

  useEffect(() => {
    console.log("Use Effect run, Did Update")
  }, [count2])

  return (
    <Fragment>
      <button onClick={() => setCount(count + 1)}>Set Count</button>
      <button onClick={() => setCount2(count2 + 1)}>Set Count 2</button>
      <Controls fetchNewDeck={fetchNewDeck}/>
      <Main />
    </Fragment>
  );
}

export default Game;
