import { getUserId } from "./user"

export const IsLiked = (post, userId = getUserId()) => {
  let likeList = post.likes.map(l => {
      return l.likedBy.toString()
  })
  return likeList.includes(userId)
  
}