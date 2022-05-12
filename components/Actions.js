export const setModeId = (modeId) => {
    // alert(modeId)
    return {
        type: 'SET_MODE',
        id: modeId,
    }
}
export const setAuthorId = (authorId) => {
    return {
        type: 'SET_AUTHOR',
        id: authorId,
    }
}
export const setSongId = (songId) => {
    return {
        type: 'SET_SONG',
        id: songId,
    }
}
export const nextSong = () => {
    return {
        type: 'NEXT_SONG',
    }
}