import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from 'react-redux';
import {
  getPlaylistStart,
  getUserTracksStart,
  checkUserFollowPlaylistStart,
  followPlaylistStart
} from './playlistsActions';
import { PlaylistContainer } from './playlistsStyles';

import PlaylistContent from '../../components/Playlist/PlaylistContent';
import Loader from '../../components/Loader/Loader';

const Playlist = () => {
  const dispatch = useDispatch();

  const { playlist, following, loading } = useSelector(
      ({ playlists }) => playlists
    ),
    { id: userId } = useSelector(({ auth }) => auth.user);

  const { id } = useParams(),
    { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.includes('/tracks')) {
      dispatch(getPlaylistStart({ id }));
      dispatch(checkUserFollowPlaylistStart({ playlistId: id, userId }));
    } else dispatch(getUserTracksStart());
  }, [dispatch, id, pathname, userId]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--color',
      pathname.includes('/tracks') ? '#5f54a0' : playlist.primary_color
    );
    return () =>
      document.documentElement.style.setProperty('--color', '#121212');
  }, [pathname, playlist]);

  if (loading || !Object.keys(playlist).length) {
    document.documentElement.style.setProperty('--color', '#121212');
    return <Loader isLoading={loading} />;
  }

  const handleFollow = () => {
    dispatch(
      followPlaylistStart({
        playlistId: playlist.id,
        action: following ? 'unfollow' : 'follow'
      })
    );
    setTimeout(
      () =>
        dispatch(
          checkUserFollowPlaylistStart({ playlistId: playlist.id, userId })
        ),
      100
    );
  };

  return (
    <PlaylistContainer>
      {!pathname.includes('/tracks') && playlist ? (
        <PlaylistContent
          playlist={playlist}
          following={following}
          handleFollow={handleFollow}
        />
      ) : (
        <PlaylistContent playlist={playlist} isLikedSongs />
      )}
    </PlaylistContainer>
  );
};

export default Playlist;
