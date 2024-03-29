import { createJSONStorage, persist, devtools } from 'zustand/middleware'
import { listMoviesSlice, movieByCategory } from './listMoviesSlice'
import { createLanguageSlice, LanguageState } from './LanguageSlice'
import { createLoadingSlice, LoadingState } from './loadingSlice'
import { sideBarSlice, sideBarSliceType } from './sideBarSlice'
import { searchSlice, SearchState } from './SearchSlice'
import { create } from 'zustand'

type StoreState = sideBarSliceType & movieByCategory & LanguageState & SearchState & LoadingState

export const useAppStore = create<StoreState>()
    (persist(
        devtools((...a) => ({
            ...sideBarSlice(...a),
            ...listMoviesSlice(...a),
            ...createLanguageSlice(...a),
            ...searchSlice(...a),
            ...createLoadingSlice(...a),
        })),
        {
            name: 'store',
           // storage: createJSONStorage(() => sessionStorage),
           // getStorage: () => sessionStorage,
        }
    )
    )   