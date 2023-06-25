import { sideBarSlice, sideBarSliceType } from './sideBarSlice'
import { listMoviesSlice, movieByCategory } from './listMoviesSlice'
import { createJSONStorage, persist, devtools } from 'zustand/middleware'
import { createLanguageSlice, LanguageState } from './LanguageSlice'
import { createLoadingSlice, LoadingState } from './loadingSlice'
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