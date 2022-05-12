const imageFace_1 = require("../resource/image/face/001.jpg")
const imageFace_2 = require("../resource/image/face/002.jpg")
const imageFace_3 = require("../resource/image/face/003.jpg")
const imageFace_4 = require("../resource/image/face/004.jpg")
const audio_1 = require('../resource/sound/001.mp3')
const audio_2 = require('../resource/sound/002.mp3')
const audio_3 = require('../resource/sound/003.mp3')
const audio_4 = require('../resource/sound/004.mp3')
const INITIAL_STATE = {
    modeCount: 4,
    nowModeId: 1,
    nowAuthorId: 1,
    nowSongId: 1,
    modeList: [
        {
            modeId: 1,
            modeName: "Regional Radios",
            authorCount: 3,
            authorList: [
                {
                    authorId: 1,
                    authorName: "author_1-1",
                    authorFace: imageFace_1,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_1-1-1",
                            songSource: audio_1,
                        },
                        {
                            songId: 2,
                            songTitle: "title_1-1-2",
                            songSource: audio_2,
                        },
                        {
                            songId: 3,
                            songTitle: "title_1-1-3",
                            songSource: audio_3,
                        }
                    ]
                },
                {
                    authorId: 2,
                    authorName: "author_1-2",
                    authorFace: imageFace_2,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_1-2-1",
                            songSource: audio_4,
                        },
                        {
                            songId: 2,
                            songTitle: "title_1-2-2",
                            songSource: audio_1,
                        },
                        {
                            songId: 3,
                            songTitle: "title_1-2-3",
                            songSource: audio_2,
                        }
                    ]
                },
                {
                    authorId: 3,
                    authorName: "author_1-3",
                    authorFace: imageFace_3,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_1-3-1",
                            songSource: audio_3,
                        },
                        {
                            songId: 2,
                            songTitle: "title_1-3-2",
                            songSource: audio_4,
                        },
                        {
                            songId: 3,
                            songTitle: "title_1-3-3",
                            ssongSource: audio_1,
                        }
                    ]
                },
                {
                    authorId: 4,
                    authorName: "author_1-1",
                    authorFace: imageFace_1,
                    authorLike: 4,
                    songCount: 9,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_1-1-1",
                            songSource: audio_3,
                        },
                        {
                            songId: 2,
                            songTitle: "title_1-1-2",
                            songSource: audio_4,
                        },
                        {
                            songId: 3,
                            songTitle: "title_1-1-3",
                            songSource: audio_1,
                        }
                    ]
                },
                {
                    authorId: 5,
                    authorName: "author_1-2",
                    authorFace: imageFace_2,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_1-2-1",
                            songSource: audio_2,
                        },
                        {
                            songId: 2,
                            songTitle: "title_1-2-2",
                            songSource: audio_3,
                        },
                        {
                            songId: 3,
                            songTitle: "title_1-2-3",
                            songSource: audio_4,
                        }
                    ]
                },
                {
                    authorId: 6,
                    authorName: "author_1-3",
                    authorFace: imageFace_3,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_1-3-1",
                            songSource: audio_1,
                        },
                        {
                            songId: 2,
                            songTitle: "title_1-3-2",
                            songSource: audio_2,
                        },
                        {
                            songId: 3,
                            songTitle: "title_1-3-3",
                            songSource: audio_3,
                        }
                    ]
                },
                {
                    authorId: 7,
                    authorName: "author_1-1",
                    authorFace: imageFace_1,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_1-1-1",
                            songSource: audio_4,
                        },
                        {
                            songId: 2,
                            songTitle: "title_1-1-2",
                            songSource: audio_1,
                        },
                        {
                            songId: 3,
                            songTitle: "title_1-1-3",
                            songSource: audio_2,
                        }
                    ]
                },
                {
                    authorId: 8,
                    authorName: "author_1-2",
                    authorFace: imageFace_2,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_1-2-1",
                            songSource: audio_3,
                        },
                        {
                            songId: 2,
                            songTitle: "title_1-2-2",
                            songSource: audio_4,
                        },
                        {
                            songId: 3,
                            songTitle: "title_1-2-3",
                            songSource: audio_1,
                        }
                    ]
                },
                {
                    authorId: 9,
                    authorName: "author_1-3",
                    authorFace: imageFace_3,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_1-3-1",
                            songSource: audio_1,
                        },
                        {
                            songId: 2,
                            songTitle: "title_1-3-2",
                            songSource: audio_2,
                        },
                        {
                            songId: 3,
                            songTitle: "title_1-3-3",
                            songSource: audio_3,
                        }
                    ]
                }
            ]
        },
        {
            modeId: 2,
            modeName: "Reciters",
            authorCount: 3,
            authorList: [
                {
                    authorId: 1,
                    authorName: "author_2-1",
                    authorFace: imageFace_4,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_2-1-1",
                            songSource: audio_1,
                        },
                        {
                            songId: 2,
                            songTitle: "title_2-1-2",
                            songSource: audio_2,
                        },
                        {
                            songId: 3,
                            songTitle: "title_2-1-3",
                            songSource: audio_3,
                        }
                    ]
                },
                {
                    authorId: 2,
                    authorName: "author_2-2",
                    authorFace: imageFace_1,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_2-2-1",
                            songSource: audio_4,
                        },
                        {
                            songId: 2,
                            songTitle: "title_2-2-2",
                            songSource: audio_1,
                        },
                        {
                            songId: 3,
                            songTitle: "title_2-2-3",
                            songSource: audio_2,
                        }
                    ]
                },
                {
                    authorId: 3,
                    authorName: "author_2-3",
                    authorFace: imageFace_2,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_2-3-1",
                            songSource: audio_3,
                        },
                        {
                            songId: 2,
                            songTitle: "title_2-3-2",
                            songSource: audio_4,
                        },
                        {
                            songId: 3,
                            songTitle: "title_2-3-3",
                            songSource: audio_1,
                        }
                    ]
                }
            ]
        },
        {
            modeId: 3,
            modeName: "Verses of the Qur'an",
            authorCount: 3,
            authorList: [
                {
                    authorId: 1,
                    authorName: "author_3-1",
                    authorFace: imageFace_3,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_3-1-1",
                            songSource: audio_2,
                        },
                        {
                            songId: 2,
                            songTitle: "title_3-1-2",
                            songSource: audio_3,
                        },
                        {
                            songId: 3,
                            songTitle: "title_3-1-3",
                            songSource: audio_4,
                        }
                    ]
                },
                {
                    authorId: 2,
                    authorName: "author_3-2",
                    authorFace: imageFace_4,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_3-2-1",
                        },
                        {
                            songId: 2,
                            songTitle: "title_3-2-2",
                        },
                        {
                            songId: 3,
                            songTitle: "title_3-2-3",
                        }
                    ]
                },
                {
                    authorId: 3,
                    authorName: "author_3-3",
                    authorFace: imageFace_2,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_3-3-1",
                        },
                        {
                            songId: 2,
                            songTitle: "title_3-3-2",
                        },
                        {
                            songId: 3,
                            songTitle: "title_3-3-3",
                        }
                    ]
                }
            ]
        },
        {
            modeId: 4,
            modeName: "Lessons and stories",
            authorCount: 3,
            authorList: [
                {
                    authorId: 1,
                    authorName: "author_4-1",
                    authorFace: imageFace_1,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_4-1-1",
                            songSource: audio_1,
                        },
                        {
                            songId: 2,
                            songTitle: "title_4-1-2",
                            songSource: audio_2,
                        },
                        {
                            songId: 3,
                            songTitle: "title_4-1-3",
                            songSource: audio_3,
                        }
                    ]
                },
                {
                    authorId: 2,
                    authorName: "author_4-2",
                    authorFace: imageFace_2,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_4-2-1",
                            songSource: audio_4,
                        },
                        {
                            songId: 2,
                            songTitle: "title_4-2-2",
                            songSource: audio_1,
                        },
                        {
                            songId: 3,
                            songTitle: "title_4-2-3",
                            songSource: audio_2,
                        }
                    ]
                },
                {
                    authorId: 3,
                    authorName: "author_4-3",
                    authorFace: imageFace_4,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_4-3-1",
                            songSource: audio_3,
                        },
                        {
                            songId: 2,
                            songTitle: "title_4-3-2",
                            songSource: audio_1,
                        },
                        {
                            songId: 3,
                            songTitle: "title_4-3-3",
                            songSource: audio_2,
                        }
                    ]
                }
            ]
        },
        {
            modeId: 5,
            modeName: "Supplications and prayers",
            authorCount: 3,
            authorList: [
                {
                    authorId: 1,
                    authorName: "author_5-1",
                    authorFace: imageFace_1,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_5-1-1",
                            songSource: audio_1,
                        },
                        {
                            songId: 2,
                            songTitle: "title_5-1-2",
                            songSource: audio_2,
                        },
                        {
                            songId: 3,
                            songTitle: "title_5-1-3",
                            songSource: audio_3,
                        }
                    ]
                },
                {
                    authorId: 2,
                    authorName: "author_5-2",
                    authorFace: imageFace_4,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_5-2-1",
                            songSource: audio_4,
                        },
                        {
                            songId: 2,
                            songTitle: "title_5-2-2",
                            songSource: audio_1,
                        },
                        {
                            songId: 3,
                            songTitle: "title_5-2-3",
                            songSource: audio_2,
                        }
                    ]
                },
                {
                    authorId: 3,
                    authorName: "author_5-3",
                    authorFace: imageFace_3,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_5-3-1",
                            songSource: audio_3,
                        },
                        {
                            songId: 2,
                            songTitle: "title_5-3-2",
                            songSource: audio_4,
                        },
                        {
                            songId: 3,
                            songTitle: "title_5-3-3",
                            songSource: audio_1,
                        }
                    ]
                }
            ]
        },
        {
            modeId: 6,
            modeName: "Hajj and Umrah",
            authorCount: 3,
            authorList: [
                {
                    authorId: 1,
                    authorName: "author_6-1",
                    authorFace: imageFace_2,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_6-1-1",
                            songSource: audio_2,
                        },
                        {
                            songId: 2,
                            songTitle: "title_6-1-2",
                            songSource: audio_3,
                        },
                        {
                            songId: 3,
                            songTitle: "title_6-1-3",
                            songSource: audio_4,
                        }
                    ]
                },
                {
                    authorId: 2,
                    authorName: "author_6-2",
                    authorFace: imageFace_1,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_6-2-1",
                        },
                        {
                            songId: 2,
                            songTitle: "title_6-2-2",
                        },
                        {
                            songId: 3,
                            songTitle: "title_6-2-3",
                        }
                    ]
                },
                {
                    authorId: 3,
                    authorName: "author_6-3",
                    authorFace: imageFace_3,
                    authorLike: 4,
                    songCount: 3,
                    songList: [
                        {
                            songId: 1,
                            songTitle: "title_6-3-1",
                        },
                        {
                            songId: 2,
                            songTitle: "title_6-3-2",
                        },
                        {
                            songId: 3,
                            songTitle: "title_6-3-3",
                        }
                    ]
                }
            ]
        },
    ]
};

export default Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_MODE':
            state.nowModeId = action.id;
            return { ...state }
        case 'SET_AUTHOR':
            state.nowAuthorId = action.id;
            return { ...state }
        case 'SET_SONG':
            state.nowSongId = action.id;
            return { ...state }
        case 'NEXT_SONG':
            const songCount=state.modeList[nowModeId-1].authorList[nowAuthorId-1].songCount;
            state.nowSongId++;
            if(songCount < state.nowSongId) state.nowSongId=1;
            return {...state}
        default:
            return state
    }
};