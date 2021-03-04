import style from "./style.module.css";

const AboutPage = () => {

    let state = 0

    const updateState = (state, action) => {
        if (action.type === 'PLUS') {
            return {
                ...state,
                count: state.count + action.amount
            }
        } else if (action.type === 'MINUS') {
            return {
                ...state,
                count: state.count - action.amount
            }
        } else {
            return state
        }
    }

    class Store {
        constructor(updateState, state) {
            this._updateState = updateState
            this._state = state
            this._callbacks = []
        }

        getState = () => this._state

        dispatch = (action) => {
            this._state = this._updateState(this._state, action)
            this._callbacks.forEach(cb => cb())
        }

        subscribe = (callback) => {
            this._callbacks.push(callback)
        }
    }

    const initialState = {
        count: 0,
        name: 'Petr Petrov',
    }

    const store = new Store(updateState, initialState)
    const {dispatch} = store
    console.log('state', store.getState())
    store.subscribe(() => console.log('Subscribe', store.getState()))
    store.subscribe(() => console.log('Subscribe 2', store.getState()))

    const bindActionCreator = (creator, dispatch) => (...args) => {
        dispatch(creator(...args))
    }

    const plusAction = (amount) => ({type: 'PLUS', amount})
    const minusAction = (amount) => ({type: 'MINUS', amount})

    const plus = bindActionCreator(plusAction, dispatch)
    const minus = bindActionCreator(minusAction, dispatch)

    plus(7)
    minus(3)
    plus(15)
    minus(10)

    dispatch({})

    return (
        <>
            <div className={style.content}>
                <h2 className={style.center}>
                    AboutPage
                </h2>
            </div>
        </>
    )
}

export default AboutPage;