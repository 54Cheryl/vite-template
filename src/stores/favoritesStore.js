import { Toast } from '@/methods/swalToast'
import { defineStore } from 'pinia'
const favoritesStore = defineStore('favoritesStore', {
  state: () => {
    return {
      favoritesList: JSON.parse(localStorage.getItem('favoritesList')) || []
    }
  },
  actions: {
    toggleFavorite (product) {
      const favoriteIndex = this.favoritesList.findIndex((item) => item.id === product.id)
      if (favoriteIndex === -1) {
        this.favoritesList.push(product)
        Toast.fire({
          icon: 'success',
          title: '加到收藏'
        })
        console.log('加入收藏')
      } else {
        this.favoritesList.splice(favoriteIndex, 1)
        console.log('取消收藏')
        Toast.fire({
          icon: 'success',
          title: '取消收藏'
        })
      }
    },
    removeFavorite (index) {
      this.favoritesList.splice(index, 1)
      console.log('取消收藏')
      localStorage.setItem('favoritesList', JSON.stringify(this.favoritesList))
    },
    isFavorite (product) {
      return this.favoritesList.some((item) => item.id === product.id)
    }
  },
  deep: ['favoritesList']
})
export default favoritesStore
