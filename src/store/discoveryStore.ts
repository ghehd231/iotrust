import { create } from 'zustand';
import { devtools } from 'zustand-devtools';

import { getClientLanguage } from '../lib/utils';

// 스토어 상태의 타입 정의
interface DiscoveryState {
  language: 'ko' | 'en';
  updateLanguage: () => void;
}

const useDiscoveryStore = create<DiscoveryState>()(
  devtools(
    (set) => ({
      language: getClientLanguage(),
      updateLanguage: () => set((state) => ({ language: getClientLanguage() })),
    }),
    { name: 'discovery' }
  )
);

export default useDiscoveryStore;
