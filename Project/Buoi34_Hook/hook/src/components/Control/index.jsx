import React, { memo, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux";
import axios from "axios";

const Control = () => {
  const players = useSelector((state) => {
    return state.player.playerList;
  })

  const deckCard = useSelector((state) => {
    return state.card.deckCard;
  })

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Test useCallBack!!!");
  })

  const handleFetchCard = useCallback(async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://deckofcardsapi.com/api/deck/${deckCard.deck_id}/draw/?count=12`
      });
      console.log("Call API to get 12 cards",res.data);
      // Không viết logic phức tạp trên reducer
      // Chia 12 lá bài cho 4 player
      const playerList = [...players];

      for(let i in res.data.cards) {
        const playerIndex = i % playerList.length;
        playerList[playerIndex].cards.push(res.data.cards[i]);
      }
      console.log("new player list",playerList);
      // dispatch nguyên player list mới lên reducer
      dispatch({
        type: "SET_PLAYERS",
        payload: playerList,
      })
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, players, deckCard]);

  const handleRevealCard = useCallback(() => {
    dispatch({
      type: "SET_REVEAL",
      payload: true
    })
  }, [])

  const checkResult = useCallback(() => {
    const playerList = [...players];
    const winners = [];

    // check special case


    // cộng điểm từng player rồi tìm max

    // update điểm cho người chiến thắng

    // dispatch lên store cập nhật playerList
  }, []);

  // Nhận vào mảng cards
  // const checkSpecialCase = (cards) => {
  //   // KING JACK QUEEN
  //   const arrResult = cards.map((item) => {
  //     return item == "JACK" || item == "QUEEN" || item == "KING";
  //   })
  //   array.forEach(element => {
      
  //   });
  // }

  // Convert giá trị của card
  // KING, JACK, QUEEN => 10
  // ACE => 1
  const convertCardValue = (value) => {
    if(value == "JACK" || value == "QUEEN" || value == "KING") {
      return 10;
    } else if (value == "ACE") {
      return 1;
    } else return +value;
  }

  return (
    <div className="d-flex  justify-content-end container">
      <div className="border d-flex justify-content-center align-items-center px-2">
        <button className="btn btn-success mr-2">Shuffle</button>
        <button className="btn btn-info mr-2" onClick={handleFetchCard}>Draw</button>
        <button className="btn btn-primary mr-2" onClick={handleRevealCard}>Reveal</button>
      </div>
      <div className="d-flex">
        {players.map((player) => {
          return (
            <div key={player.username} className="border px-3 text-center">
              <p>{player.username}</p>
              <p> {player.totalPoint} </p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default memo(Control);
