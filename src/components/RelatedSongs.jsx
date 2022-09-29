import React from "react";
import { SongBar } from "./index.js";

const RelatedSongs = ({
  data,
  activeSong,
  isPlaying,
  handlePauseCLick,
  handlePlayClick,
  artistId,
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
      <div className="mt-6 w-full flex flex-col">
        {data?.map((song, i) => (
          <SongBar
            key={`${song.key}-${artistId}`}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            artistId={artistId}
            handlePlayClick={handlePlayClick}
            handlePauseClick={handlePauseCLick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
