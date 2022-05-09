import { Game } from "../../types"
import {Filter } from '../../components/game-list/types';
import { useEffect, useState } from "react";
import axios from "axios";

type Response = {
  games: Game[]
  error?: string
}
const API_HOST = 'free-to-play-games-database.p.rapidapi.com';
const useFetch = (params: Filter):Response =>{
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>('');
  const { platform, genre, tag, sortBy } = params;

  useEffect(() => {
    axios
      .get('/games', {
        baseURL: `https://${API_HOST}/api`,
        headers: {
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
          'X-RapidAPI-Key':
            '15a82fd04fmshaf1639ff1f4f5b2p11a743jsna13b4d631e27',
        },
        params: {
          platform,
          category: genre,
          tag,
          'sort-by':sortBy
        }
      })
      .then((res) => setGames(res.data))
      .catch((e) => setErr(e.message));
  }, [ platform, genre, tag, sortBy]);

  return {
    games,
    error: err
  }
}

export default useFetch;