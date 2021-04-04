
export default (state, action) => {
    
    switch (action.type) {  
            case "PHOTO_RECIEVED_SUCCESSFULLY":
                return {
                    ...state,
                    loading:false,
                    photo:action.payload
                }       
                case "SET_LOADING_TRUE":
                    return {
                        ...state,
                        loading:true
                    }
            case "UPLOAD_PHOTO":
                return {
                    ...state,
                    loading:true
                }
            case "CHANGE_BG_COLOR":
                console.log('changing',action.payload)
                return {
                    ...state,
                    bgColor:action.payload
                }
        default:
            return state;
        
}
}