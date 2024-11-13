import { defineStore } from 'pinia'
import { techs } from '@/constant'

export const useTechsStore = defineStore('techStores', {
  state: () => ({
    techs,
  }),
  getters: {
    getScrambledTechs(state) {
      const scrambledTechs = [...state.techs]
      for (let i = scrambledTechs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[scrambledTechs[i], scrambledTechs[j]] = [scrambledTechs[j], scrambledTechs[i]]
      }
      return scrambledTechs
    },
  },
})
