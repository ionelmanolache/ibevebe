
type ActionState = {
    name: string,
    theme: string,
    variant: string
}
type ActionData = {
    type: string;
    payload: any
}
type Actions = {
    [key: string]: Function
}

const actions: Actions = {
    changename: (state: ActionState, { payload }: ActionData) => {
        return { ...state, name: payload.name }
    },
    changetheme: (state: ActionState, { payload }: ActionData) => {
        return { ...state, theme: payload.theme }
    }
}

export const changeName = (value = "") => {
    return { type: 'changename', payload: { name: value } }
}

export const changeTheme = (value = "light") => {
    return { type: 'changetheme', payload: { theme: value } }
}

export const appReducer = (state: ActionState, { type, payload }: ActionData) => {
    const handler = actions[type];

    if (!handler) {
        throw new Error(`Unknown action '${type}'`)
    }

    return handler ? handler(state, { payload }) : state;
}