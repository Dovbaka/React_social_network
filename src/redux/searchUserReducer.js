const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SUBSCRIBE_IN_PROGRESS = 'SUBSCRIBE-IN-PROGRESS';

let initializationState = {
    users: [],
    pageSize:100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    subInProgress: []
};

function searchUserReducer(state = initializationState, action) {
    switch (action.type) {
        case SUBSCRIBE:{
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true}
                    }
                    return u;
                })
            }
        }


        case UNSUBSCRIBE:{
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return { ...u, followed: false}
                    }
                    return u;
                })
            }
        }

        case SET_USERS:{
            return { ...state, users: action.users}
        }

        case SET_CURRENT_PAGE:{
            return { ...state, currentPage: action.page}
        }

        case SET_TOTAL_COUNT:{
            return { ...state, totalUsersCount: action.count}
        }

        case TOGGLE_IS_FETCHING:{
            return { ...state, isFetching: action.isFetching}
        }

        case SUBSCRIBE_IN_PROGRESS:{
            return {
                ...state,
                subInProgress: action.InProgress ?
                    [...state.subInProgress, action.userId] :
                    state.subInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    }
}

export function subscribeActionCreator(userId){
    return {
        type: SUBSCRIBE,
        userId
    }
}

export function unsubscribeActionCreator(userId){
    return {
        type: UNSUBSCRIBE,
        userId
    }
}

export function setUsersActionCreator(users){
    return {
        type: SET_USERS,
        users
    }
}

export function setCurrentPageActionCreator(page){
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}

export function setTotalCountActionCreator(count){
    return {
        type: SET_TOTAL_COUNT,
        count
    }
}

export function toggleIsFetchingActionCreator(isFetching){
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export function subscribeInProgressActionCreator(InProgress, userId){
    return {
        type: SUBSCRIBE_IN_PROGRESS,
        InProgress,
        userId
    }
}

export default searchUserReducer;