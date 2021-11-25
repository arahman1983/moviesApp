import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'

export const useMVDispatch = () => useDispatch<AppDispatch>()
export const useMVSelector: TypedUseSelectorHook<RootState> = useSelector