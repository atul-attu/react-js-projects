export const songsReducer = () => {
    return[
        {
            title:'Think about things daoi',
            duration:'2.53'
        },
        {
            title:'7 summers morgan wallen',
            duration:'3.30'
        },
        {
            title:'Back door stray kids',
            duration:'3.09'
        }
    ];
};

export const selectedSongReducer = (selectedSong=null, action) => {
    switch(action.type){
        case "SONG_SELECTED":
            return action.payload;
        default:
            return selectedSong;
    }
}