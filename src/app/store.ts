import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../state/authSlice'

import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = { key: 'user', storage, version: 1, keyPrefix: '' }
const persistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
})

export const persistor = persistStore(store)

export const clearPersistedState = async () => {
    await persistor.purge()
    await persistor.flush()
    await storage.removeItem('user')
    await persistor.persist()
}

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
